import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, unloadPost } from "../../modules/productview";
import ProductDetail from "../../components/productview/ProductView";



const ProductViewerContainer = () => {
    //처음 마운트될 때 포스트 읽기 API 요청
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productview, error, loading} = useSelector(({ readproduct, loading }) => ({
        productview: readproduct.productview,
        error: readproduct.error,
        loading: loading['readproduct/READPRODUCT_POST'],
      
    })) ;
    
    useEffect(() => {
        dispatch(fetchProduct(id));
        //언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, id]);

    
    return <ProductDetail
                       productview={productview} 
                       loading={loading}
                       error={error} 
                         />;
};

export default ProductViewerContainer;