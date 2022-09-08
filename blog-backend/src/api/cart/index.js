import Router from 'koa-router';

import { getCarts, getCart, createCart, updateCart, deleteCart } from './cart.ctrl';



const cart = new Router();

cart.get('/', getCarts);
cart.post('/', createCart);
cart.get('/:id', getCart);
cart.patch('/:id', updateCart);
cart.delete('/:id', deleteCart);


export default cart;