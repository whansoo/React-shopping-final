import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {createRequestActionTypes,} from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/product';


import { takeLatest } from 'redux-saga/effects';

const [
    READPRODUCT_POST,
    READPRODUCT_POST_SUCCESS,
    READPRODUCT_POST_FAILUE,
] = createRequestActionTypes('readproduct/READPRODUCT_POST');

const UNLOAD_POST = 'post/UNLOAD_POST'; //포스트 페이지에서 벗어날 때 데이터 비우기



export const fetchProduct = createAction(READPRODUCT_POST, id => id);
export const unloadPost = createAction(UNLOAD_POST);


const readPostSaga = createRequestSaga(READPRODUCT_POST, postsAPI.fetchProduct);
export function*readproductSaga() {
    yield takeLatest(READPRODUCT_POST, readPostSaga);
}

const initialState = {
    productview:  null,
    error: null,
    
}

const readproduct = handleActions(
    {
        [READPRODUCT_POST_SUCCESS]: (state, {payload:productview}) => ({
            ...state,
            productview,
        }),
        [READPRODUCT_POST_FAILUE]: (state, {payload:error}) => ({
            ...state,
            error,
        }),
        [UNLOAD_POST]: () => initialState,
    },
    initialState,
);

export default readproduct;