import Image from "next/image"
import Link from "next/link"
const Chatbot = () => {
  return (
    <>
        <Link href="/chatbot">
            <div className="rounded-full h-16 w-16 fixed bottom-5 right-5 p-2 bg-primary flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-500 outline-none shadow-md shadow-gray-600 border border-blue-500">
                <Image className="h-10 m-auto" src="/icons/chat.svg" alt="Imagem do chatbot" height={40} width={40} />
            </div>
        </Link>
    </>
  )
}

export default Chatbot