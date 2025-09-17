export interface IUsuario {
    id: string;
    nome: string;
    renda: number;
}

export interface Itransacoes {
    id: string;
    nome: string;
    valor: number;
    tipo: "receita" | "despesa";
    categoria: string;
    data: string;
}