// import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/productwrite/ProductWriteButton';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { createPost, updatePost } from '../../modules/productwrite';
import { createPost, updatePost } from '../../modules/product';



const WriteActionButtonsContainer = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, price, size, color, selectedFile, originalPostId } = useSelector(({ product }) => ({
    title: product.title,
    body: product.body,
    tags: product.tags,
    price: product.price,
    size: product.size,
    color: product.color,
    // post: product.post,
    selectedFile: product.selectedFile,
    originalPostId: product.originalPostId,
  }));

  
console.log(selectedFile)
// 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({ title, body, tags, price, size, color, selectedFile, id: originalPostId }));
      return;
    }
    dispatch(
      createPost({
        title,
        body,
        tags,
        selectedFile,
        price,
        size,
        color,
      }),
    );
    navigate(-1);
  };
  


// 취소
  const onCancel = () => {
    navigate(-1);
  };



// 성공 혹은 실패 시 할 작업
  // useEffect(() => {
  //   if (post) {
  //     const { _id, user } = post;
  //    navigate(`/@${user.username}/${_id}`);
  //   }
  //   // if (postError) {
  //   //   console.log(postError);
  //   // }
  // }, [navigate, post]);
    return (
        <WriteActionButtons  onPublish={onPublish} onCancel={onCancel} isEit={!!originalPostId}/>
      
    )
};



export default WriteActionButtonsContainer;