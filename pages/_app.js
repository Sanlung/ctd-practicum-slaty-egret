import AuthUserProvider from "../context/AuthUserContext";
import "../styles/globals.css";

const MyApp = ({Component, pageProps}) => (
  <AuthUserProvider>
    <Component {...pageProps} />;
  </AuthUserProvider>
);

export default MyApp;
