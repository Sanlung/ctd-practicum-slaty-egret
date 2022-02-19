import Head from "next/head";
import { useRouter } from "next/router";
import { siteTitle } from "../components/Layout";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";



const Home = () => {

  const router = useRouter();


  return (
    <>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div>
        <LoginForm />
      </div>

      <div>
        <SignupForm />
      </div>

    </>
  );
};

export default Home;
