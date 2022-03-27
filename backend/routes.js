const express = require('express')
var router = express.Router();

const login = require("./utils/login")

router.get('/login', login.login);