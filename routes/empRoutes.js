const express = require("express");
const EmpRoutes = express.Router();
const EmoController = require("../controller/EmpController");

EmpRoutes.post("/add-com", EmoController.AddCompany);
EmpRoutes.post("/add-emp", EmoController.AddEmp);
EmpRoutes.post("/add-work", EmoController.AddWork);

// Get Employee with Company By Employee Id     One to One
EmpRoutes.get("/getemp/:id", EmoController.GetEmployee);

// Get Employee list By Company Id
EmpRoutes.get("/empbycom", EmoController.GetEmpByCompany);

EmpRoutes.get("/three/:id", EmoController.Three);

module.exports = EmpRoutes;
