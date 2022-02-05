import Head from "next/head";
import {useRouter} from "next/router";
import {siteTitle} from "../components/Layout";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2>Render login/signup form here</h2>
      <button
        type='button'
        onClick={() =>
          router.push({
            pathname: "/[user]",
            query: {
              user: "user1AuthId",
            },
          })
        }>
        Login
      </button>
    </>
  );
};

export default Home;
