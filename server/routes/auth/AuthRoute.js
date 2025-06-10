import express from "express";
import User from "../../models/userSchema.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json("This is auth api");
})

router.post("/signup", (req, res) => {
    try {
        if (req.body) {
            if (req.body.name && req.body.email && req.body.phone && req.body.password) {
                console.log("save");
                const NewUser = User(req.body)
                NewUser.save();
                res.json({ status: 201, message: "User created successfully!", data: [] })
            }
        }
    } catch (error) {
        res.json({ status: 401, message: "Signup failed!", data: [] })
    }
});

export default router;
