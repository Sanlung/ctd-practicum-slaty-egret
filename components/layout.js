import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export const siteTitle = "Whatodo App Website";

const Layout = ({children}) => (
  <div>
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
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
