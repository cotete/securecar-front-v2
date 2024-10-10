
type DropDownProps ={
    opcoes : string[];
    label : string;
    onChange : (valor : string) => void;
}

const DropDown = ({opcoes, label, onChange} : DropDownProps)=>{
    return(
        <div className="flex flex-col areaDropDown">
            <label className="mt-3 font-semibold text-lg"> {label}</label>
            <select className="rounded-xl p-3 border-2 border-primary shadow-xl" onChange={valor => onChange(valor.target.value)} name={label}>
                {opcoes.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown;