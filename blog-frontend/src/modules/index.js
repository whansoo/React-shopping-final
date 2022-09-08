import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import auth, {authSaga} from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from "./write";
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import product, { ProductSaga } from './product';
import productlist, { ProductListSaga } from './productlist';
import readproduct, {readproductSaga} from "./productview";
import addcart, {addcartSaga} from "./cart";
// import writeproduct, {writeproductSaga} from "./productwrite";
import getcartlist, { CartListSaga} from "./getcart";
 
const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write,
    post,
    posts,
    product,
    productlist,
    readproduct,
    // writeproduct,
    addcart,
    getcartlist,
});

export function*rootSaga() {
    yield all([authSaga(),userSaga(),writeSaga(),postSaga(),postsSaga(),ProductSaga(),
        ProductListSaga(),readproductSaga(),addcartSaga(),CartListSaga()]);
}
export default rootReducer;