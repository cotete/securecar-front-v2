
type InfoCarroProps={
    title : string;
    span ?: string;
}

const InfoCarro = ({title,span} : InfoCarroProps)=>{
    return(
        <p className="flex flex-col text-xl font-semibold ">{title}<span className="text-lg font-normal ml-6">{span}</span></p>
    )
}


export default InfoCarro    