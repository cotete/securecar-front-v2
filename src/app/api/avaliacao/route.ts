import { NextResponse } from "next/server";

export type avaliacoes={
    ds_feedback:string;
    vl_estrelas_feedback:number;
    id_usuario:number
}

export type avaliacoesFinal={
    id_feedback:number;
}  & avaliacoes

export async function GET() {
    try {
        const res  = await fetch(`http://localhost:8080/feedback`);
        const data :avaliacoesFinal  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar carros do usuario", error);
        throw error; 
    }
}

export async function POST(request:Request) {
    try {
        const avaliacoes: avaliacoes = await request.json();

        const res = await fetch("http://localhost:8080/feedback",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(avaliacoes),
        })
        if(!res.ok){
            throw new Error("Erro ao guardar avaliacao")
        }
        const data : avaliacoes = await res.json()

        return NextResponse.json(data)
    } catch (error) {
        console.log("erro ao guardar avaliacao", error);
        return NextResponse.json({error:"PORRA DO KRL"})
        
    }
}
