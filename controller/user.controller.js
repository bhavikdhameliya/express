// const User = require('../public/User.json');
const User = require("../model/user.model");
const bcrypt = require("bcrypt");

//user2 data
exports.signUp = async (req, res) => {
  try {
    const { fristName , lastName , password , email , gender  } = req.body;
    let user = await User.findOne({ email: email, isDelete : false });
    if (user) {
      return res.json({ messge: "user is alredy exist..." });
    }
    let hashPassword = await bcrypt.hash(password ,10 );
    console.log(hashPassword);
    user = await User.create({
      fristName , lastName , email , 
      password: hashPassword , 
      gender   
    });
   user.save();
    res.status(201).json({user , message: "User is Added." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};


exports.login = async(req ,res) =>{
  try{
    const { email , password } = req.body;
    let user = await User.findOne({ email: email, isDelete : false });
    if (!user) {
      return res.json({ messge: "user is not found" });
    }
    let checkpassword = await bcrypt.compare(password , user.password);
    if(!checkpassword){
      return res.json({message : "password is not match "});
    }
    res.status(200).json(user)
  }catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error..." });
  }
}

// user data 

exports.addNewUser = async (req, res) => {
  try {
    let { title, description, price, category, brand } = req.body;
    let user = await User.findOne({ title: title, isDelete : false });
    if (user) {
      return res.json({ messge: "Poduct is alredy exist..." });
    }
    user = await User.create({
      title,
      description,
      price,
      category,
      brand,
    });

    user.save();
    res.json({ message: "User is Added.", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

exports.getAlluser = async (req, res) => {
  try {
    let users = await User.find({ isDelete: false });
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};

exports.getuser = async (req, res) => {
  try {
    let id = req.params.id;
    let users = await User.findById(id);
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};

exports.updateuser = async (req, res) => {
  try {
    let id = req.params.id;
    letuUser = await User.findById(id, { isDelete: false });
    if (!user) {
      return res.json({ Message: "User is not found...." });
    }
    user = await User.findByIdAndUpdate(
      { _id: id },
      {
        $set: { ...req.body },
      },
      {
        new: true,
      }
    );
    user.save();
    res.json({ Message: "User is update....", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};

exports.deleteuser = async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findById(id);
    if (!user) {
      return res.json({ Message: "User is not found...." });
    }

    user = await User.findByIdAndDelete({ _id: id }); // deleteUser
    res.json({user, Message: "User is delete...." });
    // res.json({ Message: "User is delete...." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};
