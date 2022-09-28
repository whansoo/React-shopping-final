import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/product';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'product/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'product/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  PRODUCT_POST,
  PRODUCT_POST_SUCCESS,
  PRODUCT_POST_FAILURE,
] = createRequestActionTypes('product/PRODUCT_POST'); // 포스트 작성
const SET_ORIGINAL_POST = 'product/SET_ORIGINAL_POST';




const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
] = createRequestActionTypes('product/UPDATE_POST'); //포스트 수정


export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const createPost = createAction(PRODUCT_POST, ({ title, body, tags, price, color, size, selectedFile }) => ({
  title,
  body,
  tags,
  price,
  color,
  size,
  selectedFile,
}));


  


export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);

export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, body, tags }) => ({
    id,
    title,
    body,
    tags,
  })
)
// saga 생성


const ProductPostSaga = createRequestSaga(PRODUCT_POST, postsAPI.createPost);
const updatePostSaga =  createRequestSaga(UPDATE_POST, postsAPI.updatePost);

export function* ProductSaga() {
  yield takeLatest(PRODUCT_POST, ProductPostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
 
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  price: '',
  selectedFile: '',
 
  originalPostId: null,
};

const product = handleActions(
  {
    // [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [PRODUCT_POST]: state => ({
      ...state,
      // post와 postError를 초기화
      post: null,
      postError: null,
    }),
    
    [PRODUCT_POST_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product,
    }),
    
    [PRODUCT_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [SET_ORIGINAL_POST]: (state, { payload: product }) => ({
      ...state,
      title: product.title,
      body: product.body,
      tags: product.tags,
      price:product.price,
      size:product.size,
      color:product.color,
      selectedFile: product.selectedFile,
      originalPostId: product._id,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: product  }) => ({
      ...state,
      product,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
   
    
  },
  initialState
);

export default product;