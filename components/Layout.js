import Head from "next/head";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Background from "./layout/Background";

export const siteTitle = "Whatodo App";

const Layout = ({home, children}) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Collaborative project by Code the Dream students to build a todo web app using Next.js and Firebase authentication and Cloud Firestore'
        />
        <meta
          name='authors'
          content='Asel Karagazieva, Chung Kao, Ignat Babenko'
        />
        <meta name='title' content={siteTitle} />
      </Head>
      <Header isHome={home} />
      <main>
        <Background />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
