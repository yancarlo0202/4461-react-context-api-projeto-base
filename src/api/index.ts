import axios from "axios";
import { Itransacoes, IUsuario } from "../types";

const api = axios.create({
    baseURL: "http://localhost:5000"
});

export const obterUsuario = async (): Promise<IUsuario[]> => {
    const {data} = await api.get<IUsuario[]>("/usuarios");
    return data;
};

export const criarUsuario = async (usuario: Omit<IUsuario, "id">): Promise<IUsuario> => {
    const {data} = await api.post<IUsuario>("/usuarios", usuario)
    return data;
}

export const obterTransacaoes = async (): Promise<Itransacoes[]> => {
    const { data } = await api.get<Itransacoes[]>("/transacoes");
    return data;
}

export const criarTransacao = async (
    transacao: Omit<Itransacoes, "id">
): Promise<Itransacoes> => {
    const { data } = await api.post<Itransacoes>("/transacoes", transacao);
    return data;
}

