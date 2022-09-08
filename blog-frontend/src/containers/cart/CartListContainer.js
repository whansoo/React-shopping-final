import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartlist } from "../../modules/getcart";
import Cart from "../../components/cart/cart";
import { useSearchParams } from "react-router-dom";



const CartListContainer = () => {
    
    // const navigate = useNavigate();
    // const { id } = useParams();
    // const dispatch = useDispatch();
    // const { products,userId } = useSelector(
    //     ({  getcartlist,userId }) => ({
    //         products: getcartlist.products,
    //         userId: userId,
    //     }),
    // );
   
    // //  useEffect (() => {
    // //      dispatch(cartlist({ products, userId }));
    // //      }, [dispatch, searchParams]);
    // useEffect(() => {
    //     return () => {
    //     dispatch(cartlist({products}))
    //     //언마운트될 때 리덕스에서 포스트 데이터 없애기
    //     };
    // }, [dispatch,products]);
 
 const [searchParams] = useSearchParams();
 const dispatch = useDispatch();
 const { products, error, userId, loading } = useSelector(
     ({  getcartlist,userId,loading  }) => ({
        products: getcartlist.products,
        loading: loading['addcart/LIST_CART'],
        userId: userId,
        // loading: loading['addcart/LIST_CART'],
        
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