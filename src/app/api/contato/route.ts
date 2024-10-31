
import { contato } from "@/components/LoginComponentes/FormRegistro/FormRegistro";
import { NextResponse } from "next/server";

export type contatoFinal={
    idContato:number
} & contato

export async function GET() {
    try {
        const res = await fetch(`http://localhost:8080/contato`);
        const data: contato[] = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar contatos", error);
        throw error; 
    }
}

export async function POST(request:Request) {
    try {
        const contato: contato = await request.json();

        const res = await fetch("http://localhost:8080/contato",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(contato),
        })
        if(!res.ok){
            throw new Error("Erro ao guardar contato")
        }
        const data : contatoFinal = await res.json()

        return NextResponse.json(data)
    } catch (error) {
        console.log("erro ao guardar contato", error);
        throw error; 
    }
}