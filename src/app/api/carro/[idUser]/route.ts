import { Carro, CarroId } from "@/app/types";
import { NextResponse } from "next/server";


export async function GET(request: Request,{params}:{params:{idUser:number}}) {
    try {
        const res  = await fetch(`carro/${params.idUser}`);
        const data :CarroId  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar carros do usuario", error);
        throw error; 
    }
}

export async function POST(request:Request) {
    try {
        const contato: Carro = await request.json();

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
        const data : CarroId = await res.json()

        return NextResponse.json(data)
    } catch (error) {
        console.log("erro ao guardar carro", error);
        throw error; 
    }
}
