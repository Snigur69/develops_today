import {
    applyMiddleware,
    createStore,
    combineReducers,
    Store,
    AnyAction,
} from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import { PostState, PostsState } from "../interfaces/types";
import rootSaga from "./rootSaga";

import { postsReducer } from "./reducers/postsReducer";
import { currentPostReducer } from "./reducers/currentPostReducer";

interface State {
    posts: PostsState;
    currentPost: PostState;
}

export interface SagaStore extends Store<State, AnyAction> {
    sagaTask: Task;
}

let rootReducer = combineReducers({
    posts: postsReducer,
    currentPost: currentPostReducer,
});

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
