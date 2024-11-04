import { NextResponse } from "next/server";



export type seguro={
    id_seguro:number;
    nr_cnpj:string;
    nm_seguro:string;
    nr_insc_estadual:string;
}



export async function GET() {
    try {
        const res = await fetch(`http://localhost:8080/seguro`);
        const data:seguro[]  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar seguros", error);
        throw error; 
    }
}