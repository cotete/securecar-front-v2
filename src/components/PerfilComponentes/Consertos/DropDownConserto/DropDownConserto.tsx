import { consertoTipo } from '@/app/api/conserto/[idUser]/route';
import React from 'react'

type DropDownProps ={
    label : string;
    onChange : (valor : React.ChangeEvent<HTMLSelectElement>) => void;
    consertos: consertoTipo[];
}

export default function DropDownConserto({ label, onChange,consertos} : DropDownProps) {
    return(
        <div className="flex flex-col areaDropDown">
            <label className="mt-3 font-semibold text-lg"> {label}</label>
            <select className="rounded-xl p-3 border-2 border-primary shadow-xl" onChange={valor => onChange(valor)} name={label}>
                
                { consertos.map(conserto => <option key={conserto.id_conserto} value={conserto.id_usuario}>{conserto.ds_conserto}</option>)}       
            </select>
        </div>
    )
}
