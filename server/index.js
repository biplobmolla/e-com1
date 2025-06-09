import express from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Your api request successfull",
        data: []
    })
});

app.listen(process.env.PORT || 5000, () => console.log(`Server is running: http://localhost:${process.env.PORT || 5000}`));