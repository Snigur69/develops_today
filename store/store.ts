import {
    applyMiddleware,
    createStore,
    combineReducers,
    Store,
    AnyAction,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { postsReducer } from "./reducers/postsReducer";
import { currentPostReducer } from "./reducers/currentPostReducer";
import { Task } from "redux-saga";
import rootSaga from "./rootSaga";
import { PostState, PostsState } from "../interfaces/types";

interface State {
    posts: PostsState;
    currentPost: PostState;
}

let rootReducer = combineReducers({
    posts: postsReducer,
    currentPost: currentPostReducer,
});

export interface SagaStore extends Store<State, AnyAction> {
    sagaTask: Task;
}

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore = (context) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
