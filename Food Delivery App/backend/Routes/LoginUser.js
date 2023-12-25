import express from "express";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const router = express.Router();
const User = UserModel;

const jwtSecret = "pesenae$kamanehainpencho"

router.post("/loginuser", async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;

        let userData = await User.findOne({ email });

        if (!userData) return res.status(400).send({ message: "User Not Found" });

        const comparePassword = await bcrypt.compare(password, userData.password)

        if (!comparePassword) return res.status(400).send({ message: "Password & Email Not matched!" });

        const data = {
            user: {
                id: userData.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret)

        res.send({ success: true, authToken: authToken });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

export default router;
