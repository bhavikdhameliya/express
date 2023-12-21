// const User = require('../public/User.json');
const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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
    let payload = {
      userId: user._id
    }
    let token = jwt.sign(payload , process.env.SECRET_KEY);
    res.status(200).json({token , message: 'login sucess'});
  }catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

exports.getuser = async (req, res) => { 
  try {
   
    res.json(req.user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};

exports.updateuser = async (req, res) => {
  try {
   let user = await User.findByIdAndUpdate(req.user._id,{ $set: { ...req.body }},{new: true})
    res.status(200).json({ user , Message: "User is update...." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};

exports.updatepassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.json({ Message: "User not found" });
    }
    if (!oldPassword || !newPassword) {
      return res.json({ Message: "Both oldPassword and newPassword are required" });
    }
    const checkOldPassword = await bcrypt.compare(oldPassword, user.password);
    if (!checkOldPassword) {
      return res.json({ Message: "Old password is incorrect" });
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();
    res.status(200).json({ Message: "Password updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server error" });
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
