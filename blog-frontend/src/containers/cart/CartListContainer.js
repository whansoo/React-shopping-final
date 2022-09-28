import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartlist } from "../../modules/getcart";
import Cart from "../../components/cart/cart";
import { useSearchParams } from "react-router-dom";



const CartListContainer = () => {
 
 const [searchParams] = useSearchParams();
 const dispatch = useDispatch();
 const { products, error, userId, loading } = useSelector(
     ({  getcartlist,userId,loading  }) => ({
        products: getcartlist.products,
        loading: loading['addcart/LIST_CART'],
        userId: userId,
        
     }),
 );
 
 console.log(products)
  useEffect (() => {
    const tags = searchParams.get('tags');
     // page가 없으면 1을 기본값으로 사용
    const page = parseInt(searchParams.get('page'), 10) || 1;
     dispatch(cartlist({ tags, page }));
      }, [dispatch, searchParams ]);


    
     return(
     
        <Cart
         products={products}
          userId={userId}        
          loading={loading}
          error={error}
          />
      
     
    );
};

export default CartListContainer;