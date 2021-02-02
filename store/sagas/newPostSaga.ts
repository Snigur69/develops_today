import { takeEvery, call } from "redux-saga/effects";
import { INewPostAction } from "../../interfaces/interfaces";
import { addNewPost } from "../../services/api";
import { ADD_NEW_POST } from "../actions/newPostActions";
import Router from "next/router";

export function* addPostSaga() {
    yield takeEvery(ADD_NEW_POST, onPostAddition);
}

function* onPostAddition(action: INewPostAction) {
    try {
        yield call(addNewPost, action.post);
        yield Router.push("/");
    } catch (error) {
        throw new Error(error);
    }
}
