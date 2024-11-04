import Image from "next/image"

export type CardTestemunhoType = {
    imgTestemunho: string
    txtTestemunho: string
}

const CardTestemunho = ({imgTestemunho, txtTestemunho} : CardTestemunhoType) => {
    return (
        <>
            <div className="bg-white flex gap-5 items-center w-2/5 h-max p-5 rounded">
                <Image className="size-24 object-cover rounded-full" src={imgTestemunho} alt=""  />
                <p className="text-black text-center text-[16px] italic">{txtTestemunho}</p>
            </div>
        </>
    )
}


export default CardTestemunho