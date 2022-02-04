import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import LoginForm from "../components/auth/LoginForm";
import SignUpForm from "../components/auth/SignUpForm";

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <LoginForm />
      <br></br>
      <SignUpForm />
    </Layout>
  );
};

export default Home;
