import BasicLayout from "../containers/BasicLayout";
import { GetServerSideProps } from "next";
import styled from "styled-components";

import PostCard from "../components/PostCard";
import { IPost } from "../interfaces/interfaces";
import { getPostsRequest } from "../store/actions/postsActions";

import { wrapper, SagaStore } from "../store/store";
import { END } from "redux-saga";

interface HomeProps {
    posts: IPost[];
}

const StyledPostsWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 30px auto;
`;

const Home: React.FC<HomeProps> = ({ posts = [] }) => {
    return (
        <BasicLayout title="Home">
            <h1>Latest Posts!</h1>
            {posts.length && (
                <StyledPostsWrap>
                    {posts.map((el) => {
                        return (
                            <PostCard
                                key={el.id}
                                title={el.title}
                                body={el.body}
                                id={el.id}
                            />
                        );
                    })}
                </StyledPostsWrap>
            )}
        </BasicLayout>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => {
        store.dispatch(getPostsRequest());
        store.dispatch(END);
        await (store as SagaStore).sagaTask.toPromise();

        return {
            props: {
                posts: store.getState().posts.reverse(),
            },
        };
    }
);

export default Home;
