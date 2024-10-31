import { NextResponse } from "next/server";
import { seguro } from "../route";



export async function GET() {
    try {
        const res = await fetch(`Link-API`);
        const data:seguro[]  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar seguros", error);
        throw error; 
    }
}