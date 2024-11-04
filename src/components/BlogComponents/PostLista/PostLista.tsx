
import Link from "next/link"
import Post from "../Post/Post"
import { ListaPostsBlog } from "../lista_posts_blog"

const PostLista = () => {
  return (
    <div className="grid col-auto grid-cols-3 celular:grid-cols-1 gap-5 w-full p-4">
        {ListaPostsBlog.map((post, index) => (
          index == 0 ? '' :
          <Link key={index} href={`/blog/${post.idPost}`}>
            <Post key={index} {...post} idPost={index}/>
          </Link>
        ))}
    </div>
  )
}

export default PostLista