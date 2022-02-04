import Head from "next/head";
import Layout, {siteTitle} from "../../components/Layout";
import ListBackground from "../../components/listPane/ListBackground";
import TodoList from "../../components/listPane/TodoList";

const ListPane = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ListBackground>
        <TodoList />
      </ListBackground>
    </Layout>
  );
};

export default ListPane;
