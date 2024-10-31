import { NextResponse } from "next/server";

export type consertoTipo = {
    id_conserto :number,
    dt_conserto : Date,
    ds_conserto: string,
    vl_conserto:string,
    id_usuario:number
}

export async function GET(request: Request,{params}:{params:{idUser:number}}) {
    try {
        const res = await fetch(`Link-API/${params.idUser}`);
        const data: consertoTipo[] = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar consertos", error);
        throw error; 
    }
}


