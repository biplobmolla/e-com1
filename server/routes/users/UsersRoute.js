import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User Rotes");
});

export default router;
