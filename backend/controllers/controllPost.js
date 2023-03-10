const { default: mongoose } = require('mongoose')
const PostMessage = require('../models/modelPosts')

 const getPost = async (req,res)=>{
    try {
        const postMessage = await PostMessage.find()
       
        res.status(200).json(postMessage)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
const getPostBySearch = async (req,res) => {
    const {searchQuery} = req.query
    try {
        const title = new RegExp(searchQuery,'i')

        const posts = await PostMessage.find({$or: [{title}]})

        res.json({data: posts})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
const getPostTags = async (req,res) => {
    const {searchQuery} = req.query
    try {
        const tags = new RegExp(searchQuery,'i')

        const tposts = await PostMessage.find({$or: [{tags:{$in: tags.split(',')}}]})

        res.json({data: tposts})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
 const createPost = async (req,res)=> {
    
    const newPost = new PostMessage(req.body)
    try { 
       
       const savePost = await newPost.save()
        res.status(201).json(savePost)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
} 
const updatePost = async (req,res) =>{
    const {id: _id} = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) 
        return res.status(404).send('No post with that id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new: true})
    res.json(updatedPost)
}

const deletePost = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with that id')

        await PostMessage.findByIdAndRemove(id)

        res.json({message:'Post Deleted'})
}

module.exports = {getPostBySearch,getPostTags,getPost,createPost,updatePost,deletePost}