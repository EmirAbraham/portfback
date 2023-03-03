const { Router } = require("express");
const router = Router();

// controllers
const {
    getUser,
} = require('../controllers/getUser.js');

router.get("/", getUser);

module.exports = router;