import express from "express";
import dotenv from 'dotenv';
import cors from "cors";


import notesRoutes from "./src/Routes/notesRoutes.js";
import connectDB from "./src/Config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 50001;


app.use((req,res,next)=>{
    console.log(`Request Method is :${req.method} Request URL is: ${req.path}`);
    next();
    
})
app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes",notesRoutes); 

connectDB();
// Here we are using Databas to connect Database Here.
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});

 