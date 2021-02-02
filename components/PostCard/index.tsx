import styled from "styled-components";
import Link from "next/link";

const StyledCard = styled.div`
    border: 1px solid lightgrey;
    padding: 15px;
    text-align: center;
    width: 30%;
    margin: 15px 4px;
    > a {
        text-decoration: none;
        color: #000;
    }
`;

interface PostCardProps {
    title: string;
    body: string;
    id: string | number;
}

const PostCard: React.FC<PostCardProps> = ({ title, body, id }) => {
    return (
        <StyledCard>
            <Link href={`/posts/${id}`}>
                <a>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </a>
            </Link>
        </StyledCard>
    );
};

export default PostCard;
