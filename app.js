const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")

// models import
require("./models/todo")


// views/routes import

const todoRouter = require("./routes/todo")




const PORT = 5001



// Database connection: // abhi123// WMPC7NkXiMYfWKe2
//127.0.0.1:27017
mongoose.connect("mongodb://localhost:27017/todo")
mongoose.connection.on("connected", () => {console.log("Connected to database")})
mongoose.connection.on("error", () => {console.log("Error connecting to database")})




app.use(cors())
app.use(express.json())
app.use("/api/todo", todoRouter)







app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})


// Authentication => JWT, Passport, OAuth(google login)
// sending emails(gmail) , otps(AWS)
// Authorization => Roles, Permissions, Access Control
// Payment Gateway Razorpay and stripe (paytm is not user frinedly for developers) 
// File Uploads => multer
// Image Processing => sharp
// Node modules
