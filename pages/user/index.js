import Head from "next/head";
import Layout, {siteTitle} from "../../components/Layout";

const LoggedIn = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
};

export default LoggedIn;
