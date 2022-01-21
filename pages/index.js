import Head from "next/head";
import {siteTitle} from "../components/layout";
import App from "../components/App";

const Home = () => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <h1>
          <span className='logo-w'>W</span>
          <span className='logo'>hatodo App</span>{" "}
        </h1>
        <p>Welcome aboard. Let&apos;s get our hands dirty!</p>
        <App />
      </div>
    </>
  );
};

export default Home;
