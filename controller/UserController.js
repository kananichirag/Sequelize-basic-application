const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.User;
const Address = db.Address;
const Post = db.Post;
const bcryptjs = require("bcryptjs");

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const AddAddress = async (req, res) => {
  try {
    const add = await Address.create(req.body);
    res.json(add);
  } catch (error) {
    console.log(error);
  }
};

const AddPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const Checkuser = await User.findOne({ where: { email: email } });
    if (Checkuser) {
      res.status(409).json({ msg: "Email Already Exits.!!" });
    }

    const hashPass = await bcryptjs.hash(password, 10);
    const user = await User.create({ name, email, password: hashPass });
    if (user) {
      res.status(200).json({ msg: "Signup Success ✔" });
    } else {
      res.status(400).json({ msg: "Error to Signup 🔴" });
    }
  } catch (error) {
    if (error.name == "SequelizeUniqueConstraintError") {
      res.json("Validtion error , use diffrent Email");
    }
    console.log("Error =========>", error);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find User
    const finduser = await User.findOne({ where: { email } });
    if (!finduser) {
      res.status(400).json({ msg: "Invalid Email.!!" });
    }

    // Check Password
    const checkPass = await bcryptjs.compare(password, finduser.password);
    console.log(checkPass);
    if (!checkPass) {
      res.status(409).json({ msg: "Invalid Password.!!" });
    }

    // Generate Token
    const token = jwt.sign({ email: finduser.email }, "hello@44");
    res.status(200).json({ msg: "Authentication success.!!", token });
  } catch (error) {
    console.log("Error ==================>", error);
  }
};

const TestRoute = async (req, res) => {
  try {
    res.json({ msg: "Hello" });
  } catch (error) {
    console.log(error);
  }
};

const GetUser = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id, {
      include: [
        {
          model: db.Post,
          as: "post",
        },
      ],
    });

    const address = await db.Address.findByPk(req.params.id, {
      include: [
        {
          model: db.User,
          as: "user",
        },
      ],
    });
    res.json(user);
  } catch (error) {
    console.log("Erro =============>", error);
  }
};

module.exports = {
  CreateUser,
  SignUp,
  Login,
  TestRoute,
  GetUser,
  AddAddress,
  AddPost,
};
