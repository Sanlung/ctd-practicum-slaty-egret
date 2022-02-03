import Head from "next/head";
import Layout, {siteTitle} from "../../components/Layout";
import TodoList from "../../components/listPane/TodoList";

const List = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <TodoList />
    <div>
    <h1>Write the todo list page here using ListPane component</h1>
    </div> 
  </Layout>
);

export default List;

