"use client"
import {
    faFaceAngry,
    faFaceMeh,
    faFaceLaughWink,
    faClose,
    faFaceSmileBeam,
  } from "@fortawesome/free-solid-svg-icons";
  // import { faFaceLaughWink } from "@fortawesome/free-solid-svg-icons/faFaceLaughWink";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useState } from "react";
  
  export type PopupProps = {
    isOpen: boolean;
    onClose: () => void;
  };
  const AvaliacaoPopup = ({ isOpen, onClose }: PopupProps) => {
    const [conteudoIframe, setConteudoIframe] = useState(false)
    if (!isOpen) return null;
    const agradecerFeedback = () => {
      setConteudoIframe(true)
      setTimeout(() => {
        setConteudoIframe(false)
        onClose();
      }, 3000);
  
    };
  
    return (
      <div
        className="celular:max-w-screen-sm celular:w-[90vw] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-md w-max h-max p-4 bg-primary shadow-xl shadow-gray-500 fixed justify-self-center place-self-center self-center m-auto flex flex-col"
        onClick={onClose}
      >
        <button className="flex self-end justify-self-end " onClick={onClose}>
          <FontAwesomeIcon className="text-white" icon={faClose} />
        </button>
        <div
          className="popup-conteudo flex flex-col p-10 justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex w-full justify-between mb-4">
            <h2 className="text-white font-bold text-3xl tracking-wide celular:text-wrap">
              Estamos ajudando você?
            </h2>
          </div>
          <p className="text-gray-300 tracking-tight celular:text-wrap">
            Queremos sempre fazer o melhor para ajudar você! Esperamos não te
            atrapalhar!!
          </p>
          
          <div className="flex gap-4 w-max py-4">
            <button onClick={agradecerFeedback}>
              <FontAwesomeIcon
                className="h-16 text-white hover:text-red-500 hover:scale-105 transition-all duration-500"
                icon={faFaceAngry}
              />
            </button>
            <button onClick={agradecerFeedback}>
              <FontAwesomeIcon
                className="h-16 text-white hover:text-gray-500 hover:scale-105 transition-all duration-500"
                icon={faFaceMeh}
              />
            </button>
            <button onClick={agradecerFeedback}>
              <FontAwesomeIcon
                className="h-16 text-white hover:text-green-500 hover:scale-105 transition-all duration-500"
                icon={faFaceLaughWink}
              />
            </button>
          </div>
          <div className={`flex gap-4 justify-start items-center ${conteudoIframe ? '-ml-5 ' : 'hidden'}`}>
            <p className="text-gray-300 text-xl w-full">Obrigado pela sua avaliação!</p>
            <FontAwesomeIcon icon={faFaceSmileBeam} className="md:!static text-yellow-400 text-2xl absolute right-11 " />
          </div>
          <iframe className={`${conteudoIframe ? 'block h-max -mt-5 -mb-10' : 'hidden'}`} src="https://lottie.host/embed/380ec78b-0078-4076-8cc4-6fb7806aa78b/gbSqzPlBsm.json"></iframe>
        </div>
      </div>
    );
  };
  
  export default AvaliacaoPopup;
  