type InputArea={
    label : string;
    required: boolean;
    placeHolder : string;
    disable ?: boolean;
    value ?: string;
    onChange ?: (valor : string) =>void;
    tipo ?: string;
    max_length ?: number;
}

const InputArea = ({onChange,value,label,required ,placeHolder, disable,tipo,max_length}:InputArea)=>{

    const aoDigitado = (e :string)=>{
        if(onChange != undefined){
            onChange(e)
        } 
    }

    return(
        <>
        <label className="mt-3 font-semibold text-lg">{label}</label>
        <input
        className={`${disable==true? "bg-gray-300" : ""} rounded-xl p-3 border-2 border-primary shadow-md`}
        value={value}
        required={required}
        placeholder={placeHolder}
        type={tipo}
        disabled={disable}
        maxLength={max_length}
        onChange={e => aoDigitado(e.target.value)}>
        </input>
        </>
    )
}

export default InputArea