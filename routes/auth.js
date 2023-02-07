import express from "express";
import { login, register } from "../controllers/authController.js";
import {body} from 'express-validator'
import { validationResultExpress } from "../middlewares/validationResultsExpress.js";
const router = express.Router();

router.post("/register",[
    body("email", "Email invalido")
        .isEmail()
        .normalizeEmail()
        .trim(),
    body("password", "Formato de password incorrecto")
        .trim()
        .isLength({min: 6})
], validationResultExpress, register);
router.post('/login', login);

export default router;