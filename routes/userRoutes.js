const express = require("express");
const UserRoutes = express.Router();
const UserController = require("../controller/UserController");
const Middleware = require("../middleware/checkAuth");

UserRoutes.post("/signup", UserController.SignUp);
UserRoutes.post("/login", UserController.Login);
UserRoutes.get("/getuser/:id", UserController.GetUser);

// Add Address
UserRoutes.post("/add-address", UserController.AddAddress);

// Add Post
UserRoutes.post("/add-post", UserController.AddPost);

// Protect Routes
UserRoutes.get("/test", Middleware.CheckAuth, UserController.TestRoute);

module.exports = UserRoutes;
