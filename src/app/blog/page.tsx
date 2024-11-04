import Link from "next/link";
import Post from "../../components/BlogComponents/Post/Post";
import PostLista from "../../components/BlogComponents/PostLista/PostLista";
import { ListaPostsBlog } from "../../components/BlogComponents/lista_posts_blog";

const [firstPost] = ListaPostsBlog;

function Blog() {
  return (
    <>
      <div className="bg-white flex flex-col max-w-screen-xl m-auto py-6">
        {/* <h1 className="text-4xl text-center py-8">Blog</h1> */}
        <Link href={`/blog/${firstPost.idPost}`}>
          <Post key={"main-post"} {...firstPost} isMainPost={true}/>
        </Link>
        <h2 className="text-2xl text-center py-4 self-start font-semibold ml-4">Confira nossos posts mais recentes</h2>
        <PostLista />
      </div>

    </>
  );
}

export default Blog;
