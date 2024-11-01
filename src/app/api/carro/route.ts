import {  CarroId } from "@/app/types";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    try {
        const carro = await request.json();
        console.log(carro)

        const res = await fetch("http://localhost:8080/carro/",{
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(carro),
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