import { useRouter } from "next/router";
import {PostProps } from "../Post/Post";
import TagPost from "../Post/TagPost/TagPost";
import { ListaPostsBlog } from "../lista_posts_blog";
import "./blog-estilo.css";
import Image from "next/image";
//:id
export type SinglePost = {
  descricao: string;
  conteudo: string;
} & PostProps;
const SinglePost = ({params} : {params : {id : number}}) => {
  const idPost: SinglePost['idPost'] = params.id;
  const post : SinglePost | undefined = ListaPostsBlog.find((p: PostProps) => p.idPost === idPost);
  const navigate = useRouter()

  if (!post) {
    navigate.push('/pagina-erro')
  }
 
  return (
    <div className="max-w-screen-lg flex flex-col gap-5 m-auto celular:pt-0 py-5 ">
      <Image
        className="w-full object-cover max-h-[500px] rounded object-top"
        src={post!.imagem}
        alt={post!.descImagem!}
        height={500}
        width={1280}
      />
      <TagPost tagPost={post!.tagPost} />
      <h1 className="celular:px-[1.5em] text-2xl font-bold">{post!.titulo}</h1>
      <h4 className="celular:px-[2em] text-lg font-light">{post!.descricao}</h4>
      <div className="celular:px-[2em] flex gap-3 justify-start items-center">
        <Image className="h-10 w-10 object-cover rounded-full" src={post!.autorImagem} alt={post!.autor} height={40} width={40} />
        <p className="text-sm font-semibold text-gray-500">{post!.autor}</p>
        <p className="text-sm font-semibold text-gray-500">{post!.dataCriacao}</p>
      </div>
      <div className="text-black text-lg leading-snug gap-4 *:leading-snug group-[h3]:font-semibold" dangerouslySetInnerHTML={{ __html: post!.conteudo }} />
    </div>
  );
};

export default SinglePost;
