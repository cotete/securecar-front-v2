

import { Usuario } from "@/app/login/page";
import { NextResponse } from "next/server";


export type FinalUser = {
    id_user:number
} & Usuario


export async function GET() {
    try {
        const res = await fetch(`Link-API`);
        const data: Usuario[] = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar contatos", error);
        throw error; 
    }
}

export async function POST(request:Request) {
    try {
        const usuario: Usuario = await request.json();

        const res = await fetch("usuario-Link-java",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        })
        if(!res.ok){
            throw new Error("Erro ao guardar usuario")
        }
        const data : FinalUser = await res.json()

        return NextResponse.json(data)
    } catch (error) {
        console.log("erro ao guardar usuario: ", error);
        throw error; 
    }
}