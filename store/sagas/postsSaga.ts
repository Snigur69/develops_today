import { takeEvery, call, put } from "redux-saga/effects";
import { IPost } from "../../interfaces/interfaces";
import { getAllPosts } from "../../services/api";
import { getPosts, GET_POSTS_REQUEST } from "../actions/postsActions";

export function* postsSaga() {
    yield takeEvery(GET_POSTS_REQUEST, onGetPosts);
}

function* onGetPosts() {
    try {
        const posts: IPost[] = yield call(getAllPosts);
        yield put(getPosts(posts));
    } catch (error) {
        throw new Error(error);
    }
}
