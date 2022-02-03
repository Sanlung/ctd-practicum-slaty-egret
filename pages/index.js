import Head from "next/head";
import Layout, {siteTitle} from "../components/Layout";

const Home = () => {
  // write authentication calls here
  const userId = "user1AuthId";

  return (
    <Layout userId={userId}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Render login/signup form here</h1>
    </Layout>
  );
};

export default Home;
