import Head from "next/head";
import Layout, {siteTitle} from "../components/Layout";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";

const Home = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <LoginForm />
    <SignupForm />
  </Layout>
);

export default Home;
