const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;


uniqueCheck = (req, res, next) => {
    User.findOne({
        
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: "Username exists already."
            });
            return;
        }
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user){
                res.status(400).send({
                    message: "Email already exists"
                });
                return;
            }
            next();
        });
    });
    
};