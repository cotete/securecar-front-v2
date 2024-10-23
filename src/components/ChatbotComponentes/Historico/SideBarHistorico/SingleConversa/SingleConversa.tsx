export type SingleConversaProps = {
    TituloConversa : string
}
const SingleConversa = ({TituloConversa} : SingleConversaProps) => {
  return (
    <div className="bg-primary border-b-2 first-of-type:border-t-2 border-[#366ba9] flex justify-center items-center py-3 px-4">
        <p className="text-white w-max text-lg">{TituloConversa}</p>
    </div>
  )
}

export default SingleConversa