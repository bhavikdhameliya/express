// const User = require('../public/User.json');
const User = require("../model/user.model");

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
    let User = await User.findById(id);
    if (!user) {
      return res.json({ Message: "User is not found...." });
    }

    user = await User.findByIdAndDelete({ _id: id }); // deleteUser
    res.json({ Message: "User is delete....", user });
    res.json({ Message: "User is delete...." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};
