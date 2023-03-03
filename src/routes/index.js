const { Router } = require("express");
const router = Router();

//IMPORTAMOS LAS RUTAS
const getUser = require("./getUser.js");
const postUser = require("./postUser");

//DEFINIMOS LAS RUTAS
router.use("/user", getUser);
router.use("/user", postUser);

module.exports = router;