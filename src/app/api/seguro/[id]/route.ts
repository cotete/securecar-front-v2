import { NextResponse } from "next/server";
import { seguro } from "../route";


export async function GET(request: Request,{params}:{params:{idSeguro:number}}) {
    try {
        const res = await fetch(`http://localhost:8080/seguro/${params.idSeguro}`);
        const data:seguro  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar seguros", error);
        throw error; 
    }
}
