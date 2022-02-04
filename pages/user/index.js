import Head from "next/head";
import Layout, {siteTitle} from "../../components/Layout";
import ListBackground from "../../components/listPane/ListBackground";

const LoggedIn = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ListBackground></ListBackground>
    </Layout>
  );
};

export default LoggedIn;
