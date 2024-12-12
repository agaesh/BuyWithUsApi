const express = require('express');
const validator = require("express-validator");
const firebaseController = require("../Controllers/FirebaseController")
const router = express.Router();
const { fire } = require('../firebase');
const controller = require("../Controllers/UserController")

const userRegisterValidationRules = require("../validators/UserRegisterValidationRules");

const UserController = new controller();
const { getFirestore, collection, getDocs, getDoc, setDoc, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, doc } = require('firebase/firestore');

router.get("/",async(req,res)=>{
    await UserController.fetchUser(req,res);
})
router.post("/",userRegisterValidationRules, async(req,res)=>{
    await UserController.CreateUser(req,res)
})
router.put("/", async(req,res)=>{
    await UserController.UpdateUser(req,res);
})
router.delete("/",[
    body('id').notEmpty().
    withMessage('User ID must be provided').
    isString().withMessage('User ID must be a valid string'),
], async(req,res)=>{
    await UserController.DeleteUser(req,res);
})
module.exports = router;