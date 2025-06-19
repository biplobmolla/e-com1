import express from "express";
import User from "../../models/userSchema.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", (req, res) => {
    res.json("This is auth api");
});

const generateJWTToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

router.post("/signup", async (req, res) => {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }
        if (req.body) {
            if (req.body.name && req.body.email && req.body.phone && req.body.password) {
                const NewUser = User(req.body)
                const newUserData = await NewUser.save();
                console.log("newUserData: ", newUserData);
                res.json({ status: 201, message: "User created successfully!", token: generateJWTToken(newUserData?._id) })
            }
        }
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: "Email already exists" });
        }
        return res.status(500).json({ status: 500, message: "Server error. Please try again later.", data: {} });
    }
});

router.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({ email, password });

        if (user.email) {
            return res.json({ status: 200, message: "Login successfull", token: generateJWTToken(user?._id) });
        }

    } catch (error) {
        console.log("error: ", error);
        return res.status(400).json({ status: 400, message: "Login Failed", data: {} });
    }
});

router.post("/token/verify", async (req, res) => {
    const { token } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded?.id).select('-password');

    return res.status(200).json({ status: 200, message: "Token is authenticated", data: { user } });
});

export default router;
