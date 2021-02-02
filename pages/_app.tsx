import { createGlobalStyle } from "styled-components";
import { wrapper } from "../store/store";

const AppWrapper = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: "Lato", sans-serif;
}
`;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <AppWrapper />
        </>
    );
}

export default wrapper.withRedux(MyApp);
