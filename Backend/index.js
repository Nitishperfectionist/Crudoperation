import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbconnected from "./config/db.js";
import router from "./routes/product.route.js";
import paymentRouter from "./routes/payment.route.js";

dotenv.config();

const app = express();

// MongoDB connection
dbconnected();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// API routes
app.use('/api', router);
app.use('/payment', paymentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
