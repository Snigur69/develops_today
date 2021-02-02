import { IPost, IPostsAction, IRequestAction } from "../../interfaces/interfaces";

export const GET_POSTS: string = 'GET_POSTS';
export const GET_POSTS_REQUEST: string = 'GET_POSTS_REQUEST';

export const getPostsRequest = (): IRequestAction => {
    return {
        type: GET_POSTS_REQUEST
    }
}

export const getPosts = (posts: IPost[]): IPostsAction => {
    return {
        type: GET_POSTS,
        posts
    }
}