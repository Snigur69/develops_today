import { all } from "redux-saga/effects";
import { postsSaga } from "./sagas/postsSaga";
import { currentPostSaga } from "./sagas/currentPostSaga";
import { addPostSaga } from "./sagas/newPostSaga";

export default function* rootSaga() {
    yield all([postsSaga(), currentPostSaga(), addPostSaga()]);
}
