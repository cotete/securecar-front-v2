export type Carro={
    modelo: string;
    placa: string;
    ano: string;
    quilometragem: string;
    chassi: string;
}

export type CarroId={
    idCarro:number;
    idUsuario:number;
    idSeguro:number;
} & Carro