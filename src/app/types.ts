export type Carro={
    marca: string;
    modelo: string;
    placa: string;
    ano: string;
    quilometragem: string;
    chassi: string;
    seguro:string;
}

export type CarroId ={
    id_Carro:number;
    id_usuario:number;
    id_seguro:number;
} & Carro