import { CarroId } from "@/app/types";
import { NextResponse } from "next/server";



export async function PUT(request: Request,{params}:{params:{idUser:number,idCarro:number}}) {
    try {
        const carro : CarroId = await request.json();
        await fetch(`http://localhost:8080/carro/${params.idUser}/${params.idCarro}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
            },body:JSON.stringify(carro)
        })
        return NextResponse.json({"mensagem":"editado com sucesso"});
    } catch (error) {
        console.log("erro ao editar carro", error);
        throw error; 
    }
}

export async function DELETE(request: Request,{params}:{params:{idUser:number,idCarro:number}}) {
    try {
        await fetch(`http://localhost:8080/carro/${params.idCarro}`,{
            method:'DELETE',
            headers:{
                "Content-Type": "application/json",
            }
        })
        return NextResponse.json({"mensagem":"excluido com sucesso"});
    } catch (error) {
        console.log("erro ao excluir carro", error);
        throw error; 
    }
}