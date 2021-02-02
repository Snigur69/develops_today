import axios from "axios";
import { INewPost } from "../interfaces/interfaces";

export const getAllPosts = async () => {
    try {
        return await (await axios.get("https://simple-blog-api.crew.red/posts"))
            .data;
    } catch {
        throw new Error("API Error");
    }
};

export const getPostById = async (id: string) => {
    try {
        return await (
            await axios.get(
                `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`
            )
        ).data;
    } catch {
        throw new Error("API Error");
    }
};

export const addNewPost = async (post: INewPost) => {
    await axios.post("https://simple-blog-api.crew.red/posts", {
        title: post.title,
        body: post.body,
    });
};
