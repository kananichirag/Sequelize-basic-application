const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const IndexRoutes = require("./routes/indexRoutes");
const db = require("./models");

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
});

app.use(bodyParser.json());
app.use("/v1", IndexRoutes);

app.listen(4000, () => console.log("Server Start 🚀"));
