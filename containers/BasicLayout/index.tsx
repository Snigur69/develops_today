import Head from "next/head";
import styled from "styled-components";
import Header from "../../components/Header";

interface BasicLayoutProps {
    title: string;
}

const StyledMainWrap = styled.div`
    max-width: 1200px;
    margin: 30px auto;
    text-align: center;
`;
const BasicLayout: React.FC<BasicLayoutProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <StyledMainWrap>{children}</StyledMainWrap>
        </>
    );
};

export default BasicLayout;
