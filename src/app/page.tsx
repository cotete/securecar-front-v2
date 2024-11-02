import Equipe from "@/components/Equipe/Equipe";
import Carousel from "@/components/TesteEquipe/TestemunhosCarrousel";
import ListaDeTestemunhos from "@/components/Testemunhos/lista_testemunhos";
import Image from "next/image";
import help from "../../public/img/help.webp"
import guincho from "../../public/img/porto-guincho.webp"

export default function Home() {
  return (
    <>
      <div className="w-full celular:h-auto h-[200px] border-primary-dark border-t bg-primary flex justify-center items-center p-4">
        <h1 className="celular:text-3xl text-white text-6xl text-center">SecureCar</h1>
      </div>
      <section className="celular:flex-col-reverse celular:h-max! celular:py-4 celular:px-4 w-full flex justify-evenly items-center gap-3 my-4 md:h-[600px]">
        <div className="tablet:w-full w-1/2  flex justify-center items-center flex-col">
          <h3 className="celular:text-3xl celular:text-center text-5xl font-medium pb-16">Quem nós somos?</h3>
          <p className="celular:text-lg text-3xl font-light w-3/4 text-center ">
            Nós somos a SecureCar, a ajuda que você precisa a qualquer momento.
            Nosso intuito é te ajudar com problemas veiculares, da forma mais
            simples e rápida possível.
          </p>
        </div>
        <div className="tablet:hidden w-1/2 flex justify-center items-center ">
          <Image
            src={help}
            alt="Ajudamos você com os problemas veiculares"
            height={400}
            width={400}
            className="celular:h-40 celular:w-40 h-[400px] object-contain rounded"
          />
        </div>
      </section>
      <section className="celular:h-auto celular:py-10 px-4 w-full h-[600px] bg-primary flex justify-center items-center flex-col">
        <h2 className="celular:text-center celular:text-3xl font-medium text-white text-5xl pb-[50px]">
          Como faremos isso?
        </h2>
        <p className="celular:text-lg celular:w-full celular:font-normal font-light text-white text-3xl text-center w-3/4">
          Para te ajudar você terá que falar com nosso assistente virtual e
          informar a ele o problema que seu carro está apresentando, com isso
          nosso assistente tentará te guiar para o possível problema. Com isso o
          assistente gerará um diagnóstico com um preço e você poderá imprimir
          esse diagnóstico e levar a alguma oficina para que o seu carro seja
          concertado de maneira mais agil.
        </p>
      </section>
      <section className="celular:w-full celular:px-4 w-5/6 flex justify-evenly items-center gap-3 my-4 h-[600px] m-auto">
        <div className="tablet:hidden w-1/4 flex justify-center items-center">
          <Image src={guincho} alt="Imagem guincho" width={600} height={600}/>
        </div>
        <div className="celular:w-full! w-3/4 tablet:w-full flex justify-center items-center flex-col">
          <h2 className="celular:text-3xl celular:pb-7 font-medium text-center text-black text-5xl pb-[50px]">
          O que mais te oferecemos?
          </h2>
          <p className="celular:text-[20px] font-light text-black text-3xl text-center w-3/4">
          Caso você não esteja em sua residencia, nós podemos também te oferecer guinchos caso você precise.
          E encaminhar o seu veiculo para a oficina mais próxima.
          </p>
        </div>
      </section>
      <Carousel testemunhos={ListaDeTestemunhos} />
      <Equipe />
    </>
  );
}
