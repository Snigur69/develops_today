import { takeEvery, call, put } from "redux-saga/effects";
import { IPost, IPostRequestAction } from "../../interfaces/interfaces";
import { getPostById } from "../../services/api";
import {
    GET_CURRENT_POST_REQUEST,
    getCurrentPost,
} from "../actions/currentPostActions";

export function* currentPostSaga() {
    yield takeEvery(GET_CURRENT_POST_REQUEST, onGetCurrentPost);
}

function* onGetCurrentPost(action: IPostRequestAction) {
    try {
        const post: IPost = yield call(getPostById, action.id);
        yield put(getCurrentPost(post));
    } catch (error) {
        throw new Error(error);
    }
}
