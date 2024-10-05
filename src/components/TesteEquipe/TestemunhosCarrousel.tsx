"use client"

import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useCallback } from 'react';
import { CardTestemunhoType } from '../Testemunhos/CardTestemunho/card_testemunho';
import Image from 'next/image';

type TestemunhosCarrousel = {
  testemunhos: CardTestemunhoType[];
};

const Carousel = ({ testemunhos }: TestemunhosCarrousel) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const proximoSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testemunhos.length - 1 ? 0 : prevIndex + 1
    );
  }, [testemunhos.length]);

  const voltarSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testemunhos.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      proximoSlide();
    }, 8000); 

    return () => {
      clearInterval(interval);
    };
  }, [proximoSlide, testemunhos.length]);

  return (
    <>
      <div className="p-6 w-full bg-primary">
        <h3 className='text-center text-3xl tracking-wider text-white font-semibold'>Veja o relato de alguns clientes nossos!</h3>
        <p className='text-center text-white celular:w-full mt-3 w-2/5 m-auto'>Você também usar nossos serviços como Chatbot e ter sua experiência inovadora com o diagnóstico!</p>
      </div>
      <div className="carousel w-full flex justify-evenly gap-5 m-auto items-center bg-primary p-5">
        <button
          className="celular:h-6! celular:w-6! celular:p-2  h-10 w-10 bg-white rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-md"
          onClick={voltarSlide}
        >
          <FontAwesomeIcon className="hover:scale-125 transition-all duration-300 h-6" icon={faArrowLeftLong} color="#4a90e2" />
        </button>

        <div className="carousel-content">
          {testemunhos.map((testemunho, index) => (
            <div
              key={index}
              className={`slide py-4 ${index === currentIndex ? 'block' : 'hidden'}`}
            >
              <div className="celular:flex-col flex gap-5 items-center w-full h-max p-5 rounded-lg shadow-xl bg-white">
                <Image className="size-24 object-cover rounded-full" src={testemunho.imgTestemunho} alt="" height={96} width={96} />
                <p className="text-gray-800 text-center text-xl italic">{testemunho.txtTestemunho}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="celular:h-6! celular:w-6! celular:p-2 h-10 w-10 bg-white rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-md"
          onClick={proximoSlide}
        >
          <FontAwesomeIcon className="h-6" icon={faArrowRightLong} color="#4a90e2" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
