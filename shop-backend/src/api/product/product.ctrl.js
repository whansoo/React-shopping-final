import Router from 'koa-router';
import mongoose from 'mongoose';
import Product from '../../models/product';


const router = new Router();

export const getPosts = async (ctx) => { 
    try {
        const postMessages = await Product.find();
        ctx.body = postMessages;
       
        ctx.status = 200;
    } catch (error) {
      
        ctx.status = 404;
    }
}

export const getPost = async (ctx) => { 
    const { id } = ctx.params;

    try {
        const post = await Product.findById(id);
        ctx.body = post;
       
        ctx.status = 200;
    } catch (error) {
   
        ctx.status = 404;
    }
}



export const createPost = async (ctx) => {
   
    
    const newPostMessage = new Product(ctx.request.body);

    try {
        await newPostMessage.save();
       ctx.body = newPostMessage;
      
        ctx.status = 201;
    } catch (error) {
       
        ctx.status = 409;
    }
}

export const updatePost = async (ctx) => {
    const { id } = ctx.params;
    const { title, body, price, selectedFile, tags, size, color } = ctx.request.body;
    
    if (!mongoose.Types.ObjectId.isValid(id))
     return (
        
       
        ctx.status = 404
     )
    const updatedPost = { price, title, body, size, color, tags, selectedFile, _id: id };

    const update = await Product.findByIdAndUpdate(id, updatedPost, { new: true });
   
    ctx.body = update;

   
}

export const deletePost = async (ctx) => {
    const { id } = ctx.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
    return (
       
        ctx.status = 404
    
    )
    await Product.findByIdAndRemove(id);
     
       
    
}

export const likePost = async (ctx) => {
    const { id } = ctx.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
    return 
       
        ctx.status = 404;
    
    
    const post = await Product.findById(id);

    const updatedPost = await Product.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
     ctx.body = updatedPost;
   
}


export default router;