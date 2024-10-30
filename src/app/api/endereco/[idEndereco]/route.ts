


import { enderecoTipo } from "@/app/login/page";



export async function PUT(request: Request,{params}:{params:{idEndereco:number}}) {
    try {
        const endereco : enderecoTipo = await request.json();
        const res = await fetch(`linkJava/conserto/${params.idEndereco}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
            },body:JSON.stringify(endereco)
        })
        return res.ok;
    } catch (error) {
        console.error("erro ao editar endereço", error);
        throw error; 
    }
}

export async function DELETE(request: Request,{params}:{params:{idEndereco:number}}) {
    try {
        const res = await fetch(`linkJava/${params.idEndereco}`,{
            method:'DELETE',
            headers:{
                "Content-Type": "application/json",
            }
        })
        return res.ok;
    } catch (error) {
        console.error("erro ao excluir endereço", error);
        throw error; 
    }
}