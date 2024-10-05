import CardTestemunho, { CardTestemunhoType } from "./CardTestemunho/card_testemunho"
import { useCallback, useEffect, useRef, useState } from 'react'
export type ListaTestemunhosType = {
    lista_testemunhos: CardTestemunhoType[]
}


const Testemunhos = ({lista_testemunhos} : ListaTestemunhosType) =>{
    const [currentItem, setCurrentItem] = useState(0)
    // const [number, setNumber] = useState(0)
  const snapRef = useRef<HTMLDivElement>(null)
  const handleItemChange = useCallback(() => {
    // setNumber(number + 1)
    const sizeContainer = snapRef.current?.scrollWidth ?? 0
    const sizeItem = (sizeContainer ?? 0) / lista_testemunhos.length
    // console.log(number)
    if (currentItem >= lista_testemunhos.length - 1) {
      snapRef.current?.scrollBy({ left: -sizeContainer, behavior: 'smooth' })
      setCurrentItem(0)
    } else {
      snapRef.current?.scrollBy({ left: sizeItem, behavior: 'smooth' })
      setCurrentItem((currentItem) => currentItem + 1)
    }
  }, [currentItem, lista_testemunhos.length])

  useEffect(() => {
    const interval = setInterval(handleItemChange, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [currentItem, handleItemChange])



    return(
        <>
        <section ref={snapRef} className="w-full bg-primary flex items-center min-h-[400px] flex-wrap justify-evenly gap-10 p-10">
            {lista_testemunhos.map((testemunho, indice) => <CardTestemunho key={indice} {...testemunho}/>)}
        </section>
        </>
    )
}

export default Testemunhos