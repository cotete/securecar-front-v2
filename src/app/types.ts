export type Carro={
    nm_modelo: string;
    nr_placa: string;
    nr_ano: string;
    km_carro: string;
    ds_chassi: string;
}

export type CarroId={
    id_carro:number;
    id_usuario:number;
    id_seguro:number;
} & Carro