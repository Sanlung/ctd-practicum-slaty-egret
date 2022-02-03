import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Login from "../components/login/Login";

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Login />
    </Layout>
  );
};

export default Home;
