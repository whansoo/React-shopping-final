import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTypes,
  } from '../lib/createRequestSaga';
  import * as postsAPI from '../lib/api/cart';
  import { takeLatest } from 'redux-saga/effects';

  const [
    LIST_CART,
    LIST_CART_SUCCESS,
    LIST_CART_FAILURE,
  ] = createRequestActionTypes('addcart/LIST_CART');
  
  
  
  export const cartlist = createAction(
    LIST_CART,
    ({ user,selectedFile,price,productId, products, size, title, color, quantity, total }) => ({ user,selectedFile,price,productId, products, size, title, color,quantity, total }) );
  
//   export const cartlist = createAction(
//     LIST_CART,
//     ({ user, products }) => ({  
//         userId: user._id,
//         products: [
//           {
//             productId: products._id,
//             selectedFile: products.selectedFile,
//             quantity: products.quantity,
//           },
//         ],
//     }),
//   );
  
  
  
  const cartListSaga = createRequestSaga(LIST_CART, postsAPI.cartlist);
  export function* CartListSaga() {
    yield takeLatest(LIST_CART, cartListSaga);
  }
  
  
  
  const initialState = {
    userId: "",
    products: null,
    error: null,
    quantity:0,
    total: 0,
    lastPage: 1,
  };
  
  
  const getcartlist = handleActions(
    {
      [LIST_CART_SUCCESS]: (state, { payload:  products,  meta: response}) => ({
        ...state,
        products,
        lastPage: parseInt(response.headers['last-page'], 10) //문자열을 숫자로 변환
      }),
      [LIST_CART_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error,
      }),
    },
    initialState,
  );
  
  
  
  export default getcartlist;
  
  
  

  
  
  
  
  
  