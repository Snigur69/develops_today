import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
    padding: 15px 0;
    background: lightblue;
    > ul {
        margin: 0 auto;
        max-width: 1200px;
        display: flex;
        justidy-content: center;
        list-style: none;
    }
    > ul > li > a {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 15px;
    }
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/posts/new">
                        <a>Add new post</a>
                    </Link>
                </li>
            </ul>
        </StyledHeader>
    );
};

export default Header;
