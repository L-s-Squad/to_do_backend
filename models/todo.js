const mongoose = require("mongoose");


// Schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: false,
    }
})

mongoose.model("Todo", todoSchema);