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
        const res  = await fetch(`avaliacoes`);
        const data :avaliacoesFinal  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar carros do usuario", error);
        throw error; 
    }
}

export async function POST(request:Request) {
    try {
        const contato: avaliacoes = await request.json();

        const res = await fetch("carro-Link-java",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(contato),
        })
        if(!res.ok){
            throw new Error("Erro ao guardar carro")
        }
        const data : avaliacoes = await res.json()

        return NextResponse.json(data)
    } catch (error) {
        console.log("erro ao guardar carro", error);
        throw error; 
    }
}
