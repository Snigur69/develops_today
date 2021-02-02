import styled from "styled-components";
import { IComment } from "../../interfaces/interfaces";

const StyledComment = styled.div`
    border: 1px solid lightgray;
    width: 100%;
    padding: 15px;
    margin: 20px 0;
    text-align: left;
`;

const CommentCard: React.FC<IComment> = ({ id, postId, body }) => {
    return (
        <StyledComment>
            <p>{body}</p>
        </StyledComment>
    );
};

export default CommentCard;
