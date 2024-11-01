import { Usuario } from "@/app/login/page";
import { NextResponse } from "next/server";

export async function GET(request: Request,{params}:{params:{idUser:number}}) {
    try {
        const res  = await fetch(`http://localhost:8080/usuario/${params.idUser}`);
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
        const res = await fetch(`http://localhost:8080/usuario/${params.idUser}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
            },body:JSON.stringify(user)
        })
        const data :Usuario  = await res.json(); 
        console.log(data)
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao editar usuario", error);
        throw error; 
    }
}
