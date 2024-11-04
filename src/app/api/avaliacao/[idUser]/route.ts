
import { NextResponse } from "next/server";
import { avaliacoesFinal } from "../route";


export async function GET(request: Request,{params}:{params:{idUser:number}}) {
    try {
        const res  = await fetch(`http://localhost:8080/feedback/${params.idUser}`);
        const data :avaliacoesFinal  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar carros do usuario", error);
        throw error; 
    }
}


