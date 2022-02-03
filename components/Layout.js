import Head from "next/head";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Sidebar from "./sidebar/Sidebar";

export const siteTitle = "Whatodo App Website";

const Layout = ({children, home}) => (
  <>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='description'
        content='Collaborative project by Code the Dream students to build a todo web app using Next.js and Firebase authentication and Cloud Firestore'
      />
      <meta
        name='authors'
        content='Asel Karagazieva, Chung Kao, Ignat Babenko, Tsion Gebregziabher'
      />
      <meta name='title' content={siteTitle} />
    </Head>
    <Header />
    <main>
      {!home && <Sidebar />}
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
