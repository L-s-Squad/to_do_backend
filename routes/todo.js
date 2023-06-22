const express = require("express");
const todoRouter = express.Router();
const mongoose = require("mongoose");
const todo = mongoose.model("Todo");


todoRouter.post("/add", (req, res)=>{
       const {title} = req.body;

       if(!title){
           return res.status(400).json({sucess: false, message:"", error: "Title is required", data:[]})
       }

         const newTodo = new todo({
                title
         })

            newTodo.save()
            .then((todo)=>{
                return res.status(200).json({success: true, message: "Todo added successfully", error: "", data: todo})
            })
            .catch((err)=>{console.log(err)})
})

todoRouter.get("/all", (req, res)=>{
      todo.find()
        .then((todos)=>{
            return res.status(200).json({success: true, message: "Todos fetched successfully", error: "", data: todos})
        })
        .catch((err)=>{console.log(err)})
})

todoRouter.delete("/delete/:id", (req, res)=>{
       let _id = req.params.id
       todo.findByIdAndDelete({_id})
         .then((todo)=>{
             return res.status(200).json({success: true, message: "Todo deleted successfully", error: "", data: todo})
         })
         .catch(err=> console.log(err))
})

todoRouter.patch("/update/:id", (req, res)=>{
    let _id = req.params.id
    let {status} = req.body
    todo.findByIdAndUpdate({_id}, {status}, {new: true})
        .then((todo)=>{
            return res.status(200).json({success: true, message: "Todo updated successfully", error: "", data: todo})
        })
        .catch(err=> console.log(err))

})

module.exports = todoRouter;