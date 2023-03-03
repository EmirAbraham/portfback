const { Router } = require("express");
const router = Router();

//IMPORTAMOS LAS RUTAS
const user = require("./getUser.js");

//DEFINIMOS LAS RUTAS
router.use("/user", user);

module.exports = router;