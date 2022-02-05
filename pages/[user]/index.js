import Head from "next/head";
import {useRouter} from "next/router";
import {siteTitle} from "../../components/Layout";
import Sidebar from "../../components/sidebar/Sidebar";
import ListPane from "../../components/listPane/ListPane";

const LoggedIn = () => {
  const router = useRouter();
  const {user} = router.query;
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Sidebar userId={user} />
      <ListPane>
        <h1>There&apos;s no content here</h1>
      </ListPane>
    </>
  );
};

export default LoggedIn;
