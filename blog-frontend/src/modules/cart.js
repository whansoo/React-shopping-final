import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/cart';
import { takeLatest } from 'redux-saga/effects';




const INITIALIZE = 'product/INITIALIZE'; // 모든 내용 초기화
const [
    ADDCART_POST,
    ADDCART_POST_SUCCESS,
    ADDCART_POST_FAILUE,
] = createRequestActionTypes('addcart/ADDCART_POST');
const SET_ORIGINAL_CART = 'product/SET_ORIGINAL_POST';




export const initialize = createAction(INITIALIZE);




  export const createCart = createAction(ADDCART_POST, ({ user, productId, selectedFile, quantity, price, title, size, color,total})  => ({
    userId: user._id,    
    productId,
    selectedFile,
    quantity,
    price,
    title,
    size,
    color,
    total,
    
  }));
  
 

export const setOriginalPost = createAction(SET_ORIGINAL_CART, cart => cart);
const AddCartSaga = createRequestSaga(ADDCART_POST, postsAPI.createCart);
export function*addcartSaga() {
    
    yield takeLatest(ADDCART_POST, AddCartSaga);
}


const initialState = {

  userId: "",
  products: '',
  quantity: 0,
  total: 0,
 
};

const addcart = handleActions(
    
  {
    [ADDCART_POST]: state => ({
      ...state,
      cart: null,
      carterror: null,
    }),
    // 카트 담기 성공
    [ADDCART_POST_SUCCESS]: (state, { payload: products }) => ({
      ...state,
      quantity: products.quantity,
      total: products.price * products.quantity,
      products,
      // userId: products.userId,
      // products: [...state.products, products.products],
      // total: (products.total += products.quantity),
    
    }),
    // 카트 담기 실패
    [ADDCART_POST_FAILUE]: (state, { payload:  error }) => ({
      ...state,
      error,
    }),
    [SET_ORIGINAL_CART]: (state, { payload: products  }) => ({
      ...state,
      title: products.title,
      body: products.body,
      size: products.size,
      color: products.color,
    }),
  },
  initialState
);

export default addcart;