const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes")
const app = express();

// Middlewares
app.use(express.json())
app.use("/books", router)

mongoose.connect(
    "mongodb+srv://admin:admin1234@cluster0.bny17md.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>console.log("Connected to Database"))
.then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));
