import { NextResponse } from "next/server";



export type seguro={
    id_seguro:number;
    nr_cnpj:string;
    nm_seguro:string;
    nr_insc_estadual:string;
}


export async function GET(request: Request,{params}:{params:{idSeguro:number}}) {
    try {
        const res = await fetch(`Link-API/${params.idSeguro}`);
        const data:seguro  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar seguros", error);
        throw error; 
    }
}