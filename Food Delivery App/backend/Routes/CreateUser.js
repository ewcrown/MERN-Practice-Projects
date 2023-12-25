import express from "express";
import UserModel from "../models/User.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs"

const router = express.Router(); // Use express.Router directly
const User = UserModel;


router.post("/createuser", [
    body('name').notEmpty(),
    body('password').isLength({ min: 5 }),
    body('email').isEmail(),
    body('location').notEmpty()
], async (req, res) => {
    
    const salt = await bcrypt.genSalt(10)
    let secPassword = await bcrypt.hash(req.body.password, salt)
    
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });

        await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location
        });

        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

export default router;
