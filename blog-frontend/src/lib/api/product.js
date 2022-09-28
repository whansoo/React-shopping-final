import client from './client';

export const createPost = ({ title, body, tags, price, color, size, selectedFile } ) => client.post(`/api/product`, { title, body, tags, price, color, size, selectedFile } );

export const fetchProduct = (id) => client.get(`/api/product/${id}`);

export const fetchProductlist = ({ title, body, tags, price, selectedFile}) => {
    return client.get(`/api/product`, {
      params: {title, body, tags, price, selectedFile},
    });
   
  };


export const updatePost = (id, updatedPost) => client.patch(`/api/product/${id}`, updatedPost);

export const deletePost = (id) => client.delete(`/api/product/${id}`);

export const likePost = (id) => client.patch(`/api/product/${id}/likePost`);