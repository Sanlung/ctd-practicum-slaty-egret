import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({Component, pageProps}) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
