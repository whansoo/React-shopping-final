import client from './client';

export const getCart = (id,createCart ) => client.get(`/api/cart${id}`, createCart );

export const cartlist = ({ userId, selectedFile,  quantity, productId, size, title, color, total }) => {
  return client.get(`/api/cart`, {
    params: {userId, selectedFile,  quantity, productId, size, title, color, total},
  });
 
};


export const createCart = ({userId, selectedFile,  quantity, productId,price, size, title, color, total}) => client.post(`/api/cart`, {userId, selectedFile,productId, price, quantity, size, title, color, total} );

export const fetchCart = (id) => client.get(`/api/cart/${id}`);

export const fetchCartlist = ({ title, body,  price, selectedFile, size, color}) => {
    return client.get(`/api/cart`, {
      params: {title, body,  price, selectedFile, size, color},
    });
   
  };
export const updateCart = (id, updatedCart) => client.patch(`/api/cart/${id}`, updatedCart);

export const deleteCart = (id) => client.delete(`/api/cart/${id}`);


