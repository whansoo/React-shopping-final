import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTypes,
  } from '../lib/createRequestSaga';
  import * as postsAPI from '../lib/api/product';
  import { takeLatest } from 'redux-saga/effects';

  const [
    LIST_PRODUCT,
    LIST_PRODUCT_SUCCESS,
    LIST_PRODUCT_FAILURE,
  ] = createRequestActionTypes('products/LIST_PRODUCT');
  
  
  
  export const fetchProductlist = createAction(
    LIST_PRODUCT,
    ({ tags, products , price }) => ({ tags, products , price }),
  );
  
  
  
  const fetchProductSaga = createRequestSaga(LIST_PRODUCT, postsAPI.fetchProductlist);
  export function* ProductListSaga() {
    yield takeLatest(LIST_PRODUCT, fetchProductSaga);
  }
  
  
  
  const initialState = {
    products: null,
    error: null,
    lastPage: 1,
  };
  
  
  
  const productlist = handleActions(
    {
      [LIST_PRODUCT_SUCCESS]: (state, { payload:  products, meta: response }) => ({
        ...state,
        products,
        lastPage: parseInt(response.headers['last-page'], 10) //문자열을 숫자로 변환
      }),
      [LIST_PRODUCT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error,
      }),
    },
    initialState,
  );
  
  
  
  export default productlist;
  
  