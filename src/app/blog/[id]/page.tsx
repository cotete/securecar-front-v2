import Image, { StaticImageData } from "next/image";
import TagPost from "@/components/BlogComponents/Post/TagPost/TagPost";
import { ListaPostsBlog } from "@/components/BlogComponents/lista_posts_blog";
import { notFound } from "next/navigation";

export type PostProps = {
  isMainPost?: boolean;
  titulo: string;
  dataCriacao: string;
} & imagemPostProps & authorPostProps & tagPostProps;

export type imagemPostProps = {
  imagem: string | StaticImageData;
  descImagem?: string;
};

export type authorPostProps = {
  autor: string;
  autorImagem: string;
};

export type tagPostProps = {
  tagPost: string;
};

interface PageProps {
  params: {
    id: number;
  };
}

const Post = ({
  isMainPost,
  imagem,
  titulo,
  autorImagem,
  autor,
  dataCriacao,
  descImagem,
  tagPost,
}: PostProps) => {
  return (
    <>
      {isMainPost ? (
        <div className="w-full bg-white celular:flex celular:flex-col celular:justify-center celular:items-center" data-id={isMainPost}>
          <Image
            className="celular:w-[90vw] celular:h-[400px] w-full h-[600px] object-cover rounded-xl m-auto"
            src={imagem}
            alt={descImagem ?? `Foto sobre ${titulo}`}
            height={600}
            width={1000}
          />
          <div className="celular:w-[80vw] celular:ml-0 celular:-mt-10 relative bg-white p-10 flex flex-col w-2/5 justify-start -mt-60 ml-24 h-max rounded-xl shadow-md mb-4 hover:cursor-pointer hover:scale-105 transition-all duration-500">
            <TagPost tagPost={tagPost} />
            <h2 className="text-black celular:text-2xl text-4xl font-semibold py-4">{titulo}</h2>
            <div className="post-details flex gap-3 justify-start py-4 items-center w-full">
              <div className="flex gap-2 items-center">
                <Image
                  className="size-9 rounded-full object-cover object-top"
                  src={autorImagem}
                  alt={autor}
                  height={36}
                  width={36}
                />
                <p className="text-[16px] font-semibold text-gray-500">{autor}</p>
              </div>
              <div className="flex gap-2">
                <p className="text-[14px] font-medium text-gray-400">{dataCriacao}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-[#c5c5c6] p-4 rounded-xl min-h-96 max-w-[400px] m-auto flex flex-col justify-center items-center hover:scale-105 hover:cursor-pointer transition-all duration-500">
          <Image
            className="h-[240px] w-[360px] rounded object-cover my-2 object-top"
            src={imagem}
            alt={descImagem ?? `Foto sobre ${titulo}`}
            height={240}
            width={360}
          />
          <TagPost tagPost={tagPost} />
          <h3 className="text-black text-2xl font-semibold py-4">{titulo}</h3>
          <div className="post-details flex gap-3 justify-between py-4 items-center w-full">
            <div className="flex gap-2 items-center">
              <Image
                className="size-9 rounded-full object-cover object-top"
                src={autorImagem}
                alt={autor}
                height={36}
                width={36}
              />
              <p className="text-[16px] font-semibold text-gray-500">{autor}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-[14px] font-medium text-gray-400">{dataCriacao}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Page = ({ params }: PageProps) => {
  const { id } = params;
  const post = ListaPostsBlog.find((item) => item.idPost === id);

  if (!post) {
    notFound();
  }

  return <Post {...post} isMainPost={true} />;
};

export default Page;