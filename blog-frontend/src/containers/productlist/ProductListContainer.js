import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ProductList from "../../components/product/ProductList";
import Products from "../../components/Products";
import { fetchProductlist } from "../../modules/productlist";
import { useSearchParams } from "react-router-dom";
// import ProductDetail from "../../pages/ProductDetailPage";






const ProductListContainer = ({query}) => {
    // const { username } = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector(
        ({  productlist, loading, user }) => ({
            products: productlist.products,
            // error:  products.error,
            loading: loading['products/LIST_PRODUCT'],
            user: user.user,
        }),
    );
    
     useEffect (() => {
       const tags = searchParams.get('tags');
        // page가 없으면 1을 기본값으로 사용
       const page = parseInt(searchParams.get('page'), 10) || 1;
        dispatch(fetchProductlist({ tags, page }));
         }, [dispatch, searchParams ]);


     return(
      
        <Products
          loading={loading}
          error={error}
          products={products}
          query={query}
          />
        
    );
};

export default ProductListContainer;