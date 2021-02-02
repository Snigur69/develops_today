import {
    IPost,
    IPostRequestAction,
    IPostAction,
} from "../../interfaces/interfaces";

export const GET_CURRENT_POST: string = "GET_CURRENT_POST";
export const GET_CURRENT_POST_REQUEST: string = "GET_CURRENT_POST_REQUEST";

export const getCurrentPostRequest = (id: string): IPostRequestAction => {
    return {
        type: GET_CURRENT_POST_REQUEST,
        id,
    };
};

export const getCurrentPost = (post: IPost): IPostAction => {
    return {
        type: GET_CURRENT_POST,
        post,
    };
};
