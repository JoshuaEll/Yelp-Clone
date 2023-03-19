const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const seq = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.register = (req, res) => {

};