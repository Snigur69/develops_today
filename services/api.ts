import axios from "axios";
import { INewPost } from "../interfaces/interfaces";

const BASE_URL: string = "https://simple-blog-api.crew.red/posts";

export const getAllPosts = async () => {
    try {
        return await (await axios.get(BASE_URL)).data;
    } catch {
        throw new Error("API Error");
    }
};

export const getPostById = async (id: string) => {
    try {
        return await (await axios.get(`${BASE_URL}/${id}?_embed=comments`))
            .data;
    } catch {
        throw new Error("API Error");
    }
};

export const addNewPost = async (post: INewPost) => {
    try {
        await axios.post(BASE_URL, {
            title: post.title,
            body: post.body,
        });
    } catch {
        throw new Error("API Error");
    }
};
