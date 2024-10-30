import { enderecoTipo } from "@/app/login/page";
import { NextResponse } from "next/server";

export type endFinalTipo={
    id_endereco:number
} & enderecoTipo

export async function GET() {
    try {
        const res = await fetch(`Link-API`);
        const data: enderecoTipo[] = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar enderecos", error);
        throw error; 
    }
}

export async function POST(request:Request) {
    try {
        const endereco: enderecoTipo = await request.json();

        const res = await fetch("Endereco-Link-java",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(endereco),
        })
        if(!res.ok){
            throw new Error("Erro ao guardar endereço")
        }
        const data : endFinalTipo = await res.json()

        return NextResponse.json(data)
    } catch (error) {
        console.log("erro ao guardar endereço", error);
        throw error; 
    }
}