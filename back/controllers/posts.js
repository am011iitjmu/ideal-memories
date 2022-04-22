import mongoose from "mongoose"
import PostMessage from "../models/postMessage.js"

export const getPost=async(req,res)=>{
    try{
    const postMessages=await PostMessage.find()
    res.status(200).json(postMessages)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}
export const createPost=async(req,res)=>{
    const Post=req.body;
    const newPost=new PostMessage(Post)
    try{
    newPost.save()
    res.status(201).json(newPost)
    }catch(error){
        res.status(409).json({message:error.message})
    }
}
export const deletePost=async(req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("No Post Found")
    try{
    await PostMessage.findByIdAndDelete(id)
    res.json({message:"Post Deleted Succesfully"})
    }
    catch(error){
        console.log(error)
    }
}

export const updatePost=async(req,res)=>{
    const {id}=req.params;
    const Post=req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("No Post Found")
    try{
    const updatedPost= await PostMessage.findByIdAndUpdate(id,Post,{new:true})
    res.status(200).json(updatedPost)
    }
    catch{
        console.log(error)
    }
    
}