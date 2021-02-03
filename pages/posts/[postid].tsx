import { GetServerSideProps } from "next";
import { END } from "redux-saga";
import styled from "styled-components";

import { wrapper, SagaStore } from "../../store/store";
import { IPost } from "../../interfaces/interfaces";
import { getCurrentPostRequest } from "../../store/actions/currentPostActions";

import BasicLayout from "../../containers/BasicLayout";
import CommentCard from "../../components/CommentCard";

interface PostProps {
    postInfo: IPost;
}

const StyledBody = styled.p`
    margin: 30px 0;
`;

const StyledCommentsTitle = styled.h2`
    margin: 20px 0;
`;

const Post: React.FC<PostProps> = ({ postInfo }) => {
    return (
        <BasicLayout title={postInfo.title}>
            <h1>{postInfo.title}</h1>
            <StyledBody>{postInfo.body}</StyledBody>
            <div>
                <StyledCommentsTitle>Comments</StyledCommentsTitle>
                {postInfo.comments.length ? (
                    postInfo.comments.map((el) => {
                        return (
                            <CommentCard
                                key={el.id}
                                id={el.id}
                                postId={el.postId}
                                body={el.body}
                            />
                        );
                    })
                ) : (
                    <p>There are no comments yet!</p>
                )}
            </div>
        </BasicLayout>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    async ({ store, query }) => {
        store.dispatch(getCurrentPostRequest(String(query.postid)));
        store.dispatch(END);
        await (store as SagaStore).sagaTask.toPromise();

        return {
            props: {
                postInfo: store.getState().currentPost,
            },
        };
    }
);

export default Post;
