const User = require("../models/user");
const createError = require("../utils/error")
var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs");
var validator = require("email-validator");
require('dotenv').config();


const authSign = async (req, res, next) => {

    try {
        var hash = bcrypt.hashSync(req.body.password, 10);
        if (!validator.validate(req.body.email)) {
          return res.status(400).json({
            error: 'Invalid email address',
          });
        }
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        const userAlreadyExist = User.findOne(newUser)
        if (userAlreadyExist){
          res.status(400).json("user already exists")
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Perform password validation using the regex pattern
        if (!req.body.password || !passwordRegex.test(req.body.password)) {
            return res.status(400).json({
                error:
                    'Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
            });
        }
        await newUser.save();
        res.status(200).json("user has been created");
    } catch (err) {
        next(err)
    }
}


const authLogin = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json("Wrong User Name");
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json("Wrong Password");
    }

    const token = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin
    }, process.env.JWT, { expiresIn: '3d' });

    const { password, ...others } = user._doc;
    
    res.cookie('access_token', token, { httpOnly: true });
    res.status(200).json({ ...others });

  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { authSign, authLogin };