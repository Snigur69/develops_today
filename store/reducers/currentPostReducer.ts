import { IPostAction } from "../../interfaces/interfaces";
import { PostState } from "../../interfaces/types";
import { GET_CURRENT_POST } from "../actions/currentPostActions";

const initialState: PostState = {};

export const currentPostReducer = (
    state = initialState,
    action: IPostAction
): PostState => {
    switch (action.type) {
        case GET_CURRENT_POST: {
            return action.post;
        }
        default: {
            return state;
        }
    }
};
