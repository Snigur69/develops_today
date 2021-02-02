export interface IComment {
    id: number;
    postId: number;
    body: string;
}
export interface IPost {
    id: number;
    title: string;
    body: string;
    comments?: IComment[];
}

export interface IRequestAction {
    type: string;
}

export interface IPostsAction extends IRequestAction {
    posts: IPost[];
}

export interface IPostRequestAction extends IRequestAction {
    id: string;
}
export interface IPostAction extends IRequestAction {
    post: IPost;
}

export interface INewPost {
    title: string;
    body: string;
}

export interface INewPostAction {
    type: string;
    post: INewPost;
}
