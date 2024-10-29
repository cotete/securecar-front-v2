import { Usuario } from "@/app/login/page";
import { NextResponse } from "next/server";

export async function GET(request: Request,{params}:{params:{idUser:number}}) {
    try {
        const res  = await fetch(`usuario/${params.idUser}`);
        const data :Usuario  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar usuario", error);
        throw error; 
    }
}

export async function PUT(request: Request,{params}:{params:{idUser:number}}) {
    try {
        const user : Usuario = await request.json();
        const res = await fetch(`linkJava/${params.idUser}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
            },body:JSON.stringify(user)
        })
        return res.ok;
    } catch (error) {
        console.log("erro ao editar usuario", error);
        throw error; 
    }
}
