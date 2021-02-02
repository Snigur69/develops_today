import { INewPost, INewPostAction } from "../../interfaces/interfaces";

export const ADD_NEW_POST: string = "ADD_NEW_POST";

export const addNewPost = (post: INewPost): INewPostAction => {
    return {
        type: ADD_NEW_POST,
        post,
    };
};
