import Head from "next/head";
import Layout, {siteTitle} from "../components/Layout";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";
import styles from "../styles/Home.module.css";

const Home = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <div className={styles.container}>
      <LoginForm />
      <SignupForm />
    </div>
  </Layout>
);

export default Home;
