import { NextResponse } from "next/server";


export async function GET(request: Request,{params}:{params:{idUser:number,idConserto:number}}) {
    try {
        const res = await fetch(`conserto/${params.idUser}/${params.idConserto}`);
        const data = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar consertos", error);
        throw error; 
    }
}