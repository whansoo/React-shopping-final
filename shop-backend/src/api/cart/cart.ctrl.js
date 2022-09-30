import Router from 'koa-router';
import mongoose from 'mongoose';

import Cart from '../../models/cart';


const router = new Router();

export const getCarts = async (ctx) => { 
    try {
        const cartMessages = await Cart.find();
        ctx.body = cartMessages;
       
        ctx.status = 200;
    } catch (error) {
      
        ctx.status = 404;
    }
}

export const getCart= async (ctx) => { 
    const { id } = ctx.params;

    try {
        const cart = await Cart.findById(id);
        ctx.body = cart;
       
        ctx.status = 200;
    } catch (error) {
   
        ctx.status = 404;
    }
}

export const createCart = async (ctx) => {

    const newCartMessage = new Cart( ctx.request.body )

    try {
        await newCartMessage.save();
       ctx.body = newCartMessage;
      
        ctx.status = 201;
    } catch (error) {
       
        ctx.status = 409;
    }
}

export const updateCart = async (ctx) => {
    const { id } = ctx.params;
    const { title, body, price, selectedFile, size, color } = ctx.request.body;
    
    if (!mongoose.Types.ObjectId.isValid(id))
     return (
        
       
        ctx.status = 404
     )
    const updatedPost = { price, title, body, selectedFile, size, color, _id: id };

    const update = await Cart.findByIdAndUpdate(id, updatedPost, { new: true });
   
    ctx.body = update;

   
}



export const deleteCart = async ctx => {
    const { id } = ctx.params;
   
    try {
     const CartBody = await Cart.findByIdAndRemove(id).exec();
      ctx.body = CartBody;
    } catch (e) {
      ctx.throw(500, e);
    }
  };
  

export default router;