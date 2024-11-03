import { CarroId } from "@/app/types";
import { useEffect, useRef } from "react";
import FormAdicionarCarro from "../FormAdicionarCarro/FormAdicionarCarro";

type ModalAdicionarCarro = {
    isOpen: boolean;
    children: React.ReactNode;
    onAddCarro: (carro: CarroId) => void;
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


    const handleCarroCadastrado = (carro: CarroId) => {
        onAddCarro(carro);
        console.log(carro);
    };

    return (
        <dialog ref={ref} className={`absolute w-[26rem] z-50 pr-2 p-5 ${isOpen ? "open" : ""}`}>
            <div className="flex items-center justify-center float-right w-7 h-7 rounded-2xl border-2 border-primary shadow-xl">{children}</div>
            <FormAdicionarCarro onCarroCadastrado={handleCarroCadastrado} />
        </dialog>
    )
}

export default ModalAdicionarCarro