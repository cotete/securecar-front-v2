import { Carro, CarroId } from "@/app/types";
import { NextResponse } from "next/server";

export async function GET(request: Request,{params}:{params:{idUser:number,idCarro:number}}) {
    try {
        const res  = await fetch(`carro/${params.idUser}/${params.idCarro}`);
        const data :CarroId  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar carro", error);
        throw error; 
    }
}

export async function PUT(request: Request,{params}:{params:{idUser:number,idCarro:number}}) {
    try {
        const carro : CarroId = await request.json();
        const res = await fetch(`linkJava/${params.idUser}/${params.idCarro}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
            },body:JSON.stringify(carro)
        })
        return res.ok;
    } catch (error) {
        console.log("erro ao editar carro", error);
        throw error; 
    }
}

export async function DELETE(request: Request,{params}:{params:{idUser:number,idCarro:number}}) {
    try {
        const res = await fetch(`linkJava/${params.idUser}/${params.idCarro}`,{
            method:'DELETE',
            headers:{
                "Content-Type": "application/json",
            }
        })
        return res.ok;
    } catch (error) {
        console.log("erro ao excluir carro", error);
        throw error; 
    }
}