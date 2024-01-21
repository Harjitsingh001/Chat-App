
// import chats from "./data.js";
// import { configDotenv } from "dotenv";

// import express from "express";



// const app = express();
// dotenv.config();



// app.get('/' , (req,res)=>{
//     res.send("API is running ")
// })

// app.get("/api/chat" ,(req,res) =>{
//     res.send(chats)
// })

// app.get("/api/chat/:id" ,(req,res)=>{
//     // console.log(req.params.id);
//     const singleChat =chats.find ((c)=>c._id ===req.params.id);
//     res.send(singleChat); 
// })

// const PORT = process.env.PORT || 5000;
// app.listen(5000,console.log(`server started ${PORT}`))

import chats from "./data.js";
import dotenv from "dotenv";  // Fix the import statement

import express from "express";

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("API is running ");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
