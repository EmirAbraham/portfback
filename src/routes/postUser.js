const { Router } = require("express");
const router = Router();

// controllers
const {
    postUser,
} = require('../controllers/postUser.js');

router.post("/", postUser);

module.exports = router;