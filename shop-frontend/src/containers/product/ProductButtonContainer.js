import WriteActionButtons from '../../components/productwrite/ProductWriteButton';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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


    return (
        <WriteActionButtons  onPublish={onPublish} onCancel={onCancel} isEit={!!originalPostId}/>
      
    )
};



export default WriteActionButtonsContainer;