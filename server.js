
import express, { json } from "express";

const app = express()
const PORT = process.env.PORT || 5000
app.get("/", (req,res)=>{
    return res.json({
        message:"Server is running fine"
    })
})
app.listen(PORT, ()=>{
    console.log('Server is running on port here', PORT);
    
})