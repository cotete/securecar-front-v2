import Image from "next/image";
import TagPost from "@/components/BlogComponents/Post/TagPost/TagPost";
import { ListaPostsBlog } from "@/components/BlogComponents/lista_posts_blog";
import { notFound } from "next/navigation";
import { PostProps } from "@/components/BlogComponents/Post/Post";

export type SinglePost = {
  descricao: string;
  conteudo: string;
} & PostProps;

interface PageProps {
  params: {
    id: string;
  };
}

const SinglePost = ({ params }: PageProps) => {
  const idPost = Number(params.id);
  const post = ListaPostsBlog.find((p) => p.idPost === idPost);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-screen-lg flex flex-col gap-5 m-auto celular:pt-0 py-5 ">
      <Image
        className="w-full object-cover max-h-[500px] rounded object-top"
        src={post.imagem}
        alt={post.descImagem ?? ""}
        height={500}
        width={1280}
      />
      <TagPost tagPost={post.tagPost} />
      <h1 className="celular:px-[1.5em] text-2xl font-bold">{post.titulo}</h1>
      <h4 className="celular:px-[2em] text-lg font-light">{post.descricao}</h4>
      <div className="celular:px-[2em] flex gap-3 justify-start items-center">
        <Image
          className="h-10 w-10 object-cover rounded-full"
          src={post.autorImagem}
          alt={post.autor}
          height={40}
          width={40}
        />
        <p className="text-sm font-semibold text-gray-500">{post.autor}</p>
        <p className="text-sm font-semibold text-gray-500">{post.dataCriacao}</p>
      </div>
      <div
        className="text-black text-lg leading-snug gap-4 *:leading-snug group-[h3]:font-semibold"
        dangerouslySetInnerHTML={{ __html: post.conteudo }}
      />
    </div>
  );
};

export default SinglePost;