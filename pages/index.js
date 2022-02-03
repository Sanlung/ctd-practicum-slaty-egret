import Head from "next/head";
import Layout, {siteTitle} from "../components/Layout";

const Home = () => {
  return (
    <Layout home> 
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <h1>Write the login page here.</h1>
      </div>
    </Layout>
  );
};

export default Home;
