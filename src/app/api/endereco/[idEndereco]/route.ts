


import { enderecoTipo } from "@/app/login/page";
import { endFinalTipo } from "../route";
import { NextResponse } from "next/server";



export async function GET(request: Request,{params}:{params:{idEndereco:number}}) {
    try {
        const res  = await fetch(`http://localhost:8080/endereco/${params.idEndereco}`);
        const data :endFinalTipo  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar contato", error);
    }
}

export async function PUT(request: Request,{params}:{params:{idEndereco:number}}) {
    try {
        const endereco : enderecoTipo = await request.json();
        const res = await fetch(`http://localhost:8080/endereco/${params.idEndereco}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
            },body:JSON.stringify(endereco)
        })
        const data = await res.json()
        return NextResponse.json(data);
    } catch (error) {
        console.error("erro ao editar endereço", error);
    }
}

export async function DELETE(request: Request,{params}:{params:{idEndereco:number}}) {
    try {
        const res = await fetch(`http://localhost:8080/endereco/${params.idEndereco}`,{
            method:'DELETE',
            headers:{
                "Content-Type": "application/json",
            }
        })
        const data = await res.json()
        return NextResponse.json(data);
    } catch (error) {
        console.error("erro ao excluir endereço", error);
    }
}