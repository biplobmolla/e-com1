import express from "express";
import User from "../../models/userSchema.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json("This is auth api");
})

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
                await NewUser.save();
                res.json({ status: 201, message: "User created successfully!", data: [] })
            }
        }
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: "Email already exists" });
        }
        return res.status(500).json({ status: 500, message: "Server error. Please try again later.", data: [] });
    }
});

router.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({ email, password });

        if (user.email) {
            return res.json({ status: 200, message: "Login successfull", data: user });
        }

    } catch (error) {
        console.log("error: ", error);
        return res.status(400).json({ status: 400, message: "Login Failed", data: [] });
    }
});

export default router;
