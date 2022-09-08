// import { createAction, handleActions } from 'redux-actions';
// import createRequestSaga, {
//   createRequestActionTypes,
// } from '../lib/createRequestSaga';
// import * as postsAPI from '../lib/api/product';
// import { takeLatest } from 'redux-saga/effects';

// const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
// const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
// const [
//   WRITEPRODUCT_POST,
//   WRITEPRODUCT_POST_SUCCESS,
//   WRITEPRODUCT_POST_FAILURE,
// ] = createRequestActionTypes('writeproduct/WRITEPRODUCT_POST'); // 포스트 작성
// const SET_ORIGINAL_POST = 'writeproduct/SET_ORIGINAL_POST';

// const [
//   UPDATEPRODUCT_POST,
//   UPDATEPRODUCT_POST_SUCCESS,
//   UPDATEPRODUCT_POST_FAILURE,
// ] = createRequestActionTypes('writeproduct/UPDATEPRODUCT_POST'); //포스트 수정


// export const initialize = createAction(INITIALIZE);
// export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
//   key,
//   value,
// }));

// export const createPost = createAction(WRITEPRODUCT_POST, ({ title, body, tags, price, color, size, selectedFile }) => ({
//   title,
//   body,
//   tags,
//   price,
//   color,
//   size,
//   selectedFile,
// }));

// export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);

// export const updatePost = createAction(
//   UPDATEPRODUCT_POST,
//   ({ id, title, body, tags, price, size, color }) => ({
//     id,
//     title,
//     body,
//     tags,
//     price,
//     color,
//     size,
//   })
// )
// // saga 생성
// const writeProductSaga = createRequestSaga(WRITEPRODUCT_POST, postsAPI.createPost);
// const updateProductSaga =  createRequestSaga(UPDATEPRODUCT_POST, postsAPI.updatePost);

// export function* writeproductSaga() {
//   yield takeLatest(WRITEPRODUCT_POST, writeProductSaga);
//   yield takeLatest(UPDATEPRODUCT_POST, updateProductSaga);
// }

// const initialState = {
//   product:'',
//   // title: '',
//   // body: '',
//   // tags: [],
//   // price: '',
//   // selectedFile: '',
//   // // post: null,
//   // postError: null,
//   // originalPostId: null,
// };

// const writeproduct = handleActions(
//   {
//     [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
//     [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
//       ...state,
//       [key]: value, // 특정 key 값을 업데이트
//     }),
//     [WRITEPRODUCT_POST]: state => ({
//       ...state,
//       // post와 postError를 초기화
//       post: null,
//       postError: null,
//     }),
//     // 포스트 작성 성공
//     [WRITEPRODUCT_POST_SUCCESS]: (state, { payload: product }) => ({
//       ...state,
//       product,
//     }),
//     // 포스트 작성 실패
//     [WRITEPRODUCT_POST_FAILURE]: (state, { payload: postError }) => ({
//       ...state,
//       postError,
//     }),
//     [SET_ORIGINAL_POST]: (state, { payload: product }) => ({
//       ...state,
//       title: product.title,
//       body: product.body,
//       tags: product.tags,
//       price:product.price,
//       size:product.size,
//       color:product.color,
//       selectedFile: product.selectedFile,
//       originalPostId: product._id,
//     }),
//     [UPDATEPRODUCT_POST_SUCCESS]: (state, { payload: product }) => ({
//       ...state,
//       product,
//     }),
//     [UPDATEPRODUCT_POST_FAILURE]: (state, { payload: postError }) => ({
//       ...state,
//       postError,
//     })
//   },
//   initialState,
// );

// export default writeproduct;