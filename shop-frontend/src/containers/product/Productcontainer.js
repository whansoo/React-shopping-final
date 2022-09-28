import { useEffect, useCallback } from 'react';
import Form from '../../components/productwrite/Form';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/product';


const ProductContainer = () => {
  const dispatch = useDispatch();
  const { title, body, price, selectedFile, size, color } = useSelector(({ product }) => ({
    title: product.title,
    body: product.body,
    price: product.price,
    size: product.size,
    color: product.color,
    selectedFile: product.selectedFile,
  }));
  
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);
  
  
 
  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Form onChangeField={onChangeField} title={title} body={body} price={price} size={size} color={color} selectedFile={selectedFile}/>;
};
export default ProductContainer;