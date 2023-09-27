const express = require("express");
const routerApp = express.Router();

const ctlSalasDeAulas = require("../apps/controllers/salas_de_aulas/ctlSalasDeAula");

routerApp.get("/GetAllSalasDeAula", ctlSalasDeAulas.GetAllSalasDeAula);
routerApp.post("/GetSalasDeAulaByID", ctlSalasDeAulas.GetSalasDeAulaByID);
routerApp.post("/InsertSalasDeAula", ctlSalasDeAulas.InsertSalasDeAula);
routerApp.post("/UpdateSalasDeAula", ctlSalasDeAulas.UpdateSalasDeAula);
routerApp.post("/DeleteSalasDeAula", ctlSalasDeAulas.DeleteSalasDeAula);

module.exports = routerApp;
