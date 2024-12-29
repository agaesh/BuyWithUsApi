const express = require('express');
const router = express.Router();
const { fire } = require('../firebase');
const controller = require("../Controllers/UserController")
const crypto =  require("crypto");
const nodemailer = require("nodemailer");
require('dotenv').config();
const validator = require('express-validator');

// const userRegisterValidationRules = require("../validators/UserRegisterValidationRules");

const UserController = new controller();
const { getFirestore, collection, getDocs, getDoc, setDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, doc } = require('firebase/firestore');

// const generateSecureOTP = (length = 6) => {
//     const bytes = crypto.randomBytes(length);  // Generates random bytes
//     const otp = bytes.toString('hex').slice(0, length);  // Convert bytes to hex and slice the length
//     return otp;
// };

router.get("/",async(req,res)=>{
    await UserController.fetchUser(req,res);
})
// POST route for creating a user
router.post('/', async (req, res) => {
    // Check if there are validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    // Proceed with creating the user (assuming UserController.CreateUser is defined)
    await UserController.CreateUser(req, res);
  }); 
router.put("/", async(req,res)=>{
    await UserController.UpdateUser(req,res);
})
router.delete("/",[
    validator.body('id').notEmpty().
    withMessage('User ID must be provided').
    isString().withMessage('User ID must be a valid string')
    
], async(req,res)=>{
    await UserController.DeleteUser(req,res);
})
module.exports = router;