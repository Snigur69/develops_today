import { IPostsAction } from "../../interfaces/interfaces";
import { PostsState } from "../../interfaces/types";
import { GET_POSTS } from "../actions/postsActions";

const initialState: PostsState = [];

export const postsReducer = (
    state = initialState,
    action: IPostsAction
): PostsState => {
    switch (action.type) {
        case GET_POSTS: {
            return action.posts;
        }
        default: {
            return state;
        }
    }
};
