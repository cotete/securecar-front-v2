export type tagPostProps = {
  tagPost? : "Tecnologia" | "Segurança" | "Carro" | "Seguro",
  isMainCell?: boolean
}
const TagPost = ({tagPost, isMainCell} : tagPostProps) => {

  const colorVariants = {
    "Tecnologia" : `${isMainCell ? ' ' : 'celular:ml-[2em]'} flex self-start bg-[#f6f7ff] text-[#4B6BFB] rounded w-max px-2 py-1 font-semibold `,
    "Segurança" : `${isMainCell ? ' ' : 'celular:ml-[2em]'} flex self-start bg-[#f6f7ff] text-[#4B6BFB] rounded w-max px-2 py-1 font-semibold `,
    "Carro" : `${isMainCell ? ' ' : 'celular:ml-[2em]'} flex self-start bg-[#f6f7ff] text-[#4B6BFB] rounded w-max px-2 py-1 font-semibold `,
    "Seguro" : `${isMainCell ? ' ' : 'celular:ml-[2em]'} flex self-start bg-[#f6f7ff] text-[#3b41af] rounded w-max px-2 py-1 font-semibold `,
  }
  
  return (
    <div  className={`'' ${tagPost ? colorVariants[tagPost] : `${isMainCell ? ' ' : 'celular:ml-[2em]'} flex self-start bg-[#f6f7ff] text-black rounded w-max px-2 py-1 font-semibold ` }`}>{tagPost ? tagPost : 'Undefined'}</div>
  )
}

export default TagPost