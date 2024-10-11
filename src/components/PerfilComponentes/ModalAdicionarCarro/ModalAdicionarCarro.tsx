import { Carro } from "@/app/types";
import { useEffect, useRef } from "react";
import FormAdicionarCarro from "../FormAdicionarCarro/FormAdicionarCarro";

type ModalAdicionarCarro = {
    isOpen: boolean;
    children: React.ReactNode;
    onAddCarro: (carro: Carro) => void;
}

const ModalAdicionarCarro = ({ isOpen, children, onAddCarro }: ModalAdicionarCarro) => {

    const ref = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (!isOpen) {
            return;
        }
        const dialog = ref.current
        if (isOpen && dialog) {
            dialog.showModal();
        }

        return () => {
            if (dialog) {
                dialog.close();
            }
        };
    }, [isOpen]);


    const handleCarroCadastrado = (carro: Carro) => {
        onAddCarro(carro);
        console.log(carro);
    };

    return (
        <dialog ref={ref} className={`absolute w-[26rem] left-1/2 top-1/2 -translate-x-1/2 -bottom-1/4 -translate-y-1/2  pr-2 p-5  ${isOpen ? "open" : ""}`}>
            <div className="flex items-center justify-center float-right w-7 h-7 rounded-2xl border-2 border-primary shadow-xl">{children}</div>
            <FormAdicionarCarro onCarroCadastrado={handleCarroCadastrado} />
        </dialog>
    )
}

export default ModalAdicionarCarro