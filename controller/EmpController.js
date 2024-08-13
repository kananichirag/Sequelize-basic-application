const db = require("../models");
const Company = db.Company;
const Emp = db.Employee;
const Work = db.Working;
const moment = require("moment");

const AddCompany = async (req, res) => {
  try {
    const com = await Company.create(req.body);
    res.status(200).json(com);
  } catch (error) {
    console.log("==================> ", error);
  }
};

const AddEmp = async (req, res) => {
  try {
    const data = await Emp.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log("==================> ", error);
  }
};

const AddWork = async (req, res) => {
  try {
    const { weekDay, workingDate, isWorking, companyId } = req.body;
    const formateDate = moment(req.body.workingDate, "DD-MM-YYYY").format(
      "YYYY-MM-DD"
    );
    const data = await Work.create({
      weekDay,
      workingDate: formateDate,
      isWorking,
      companyId,
    });
    res.status(200).json(data);
  } catch (error) {
    console.log("==================> ", error);
  }
};

const GetEmployee = async (req, res) => {
  try {
    const employee = await Emp.findByPk(req.params.id, {
      include: [
        {
          model: db.Company,
          as: "company",
        },
      ],
    });
    res.status(200).json(employee);
  } catch (error) {
    console.log(error);
  }
};

const GetEmpByCompany = async (req, res) => {
  try {
    const data = await Company.findOne({
      where: { name: req.body.name },
      include: [
        {
          model: db.Employee,
          as: "employee",
        },
      ],
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const Three = async (req, res) => {
  try {
    const data = await Company.findByPk(req.params.id, {
      include: [
        {
          model: db.Working,
          as: "working",
        },
      ],
    });
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  AddCompany,
  AddEmp,
  AddWork,
  GetEmployee,
  GetEmpByCompany,
  Three,
};
