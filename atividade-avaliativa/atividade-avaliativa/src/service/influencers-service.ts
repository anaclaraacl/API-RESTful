import { ObjectId } from "mongodb";
import Influencers from "../model/influencers";

export default class InfluencersService {
    public static validade(influencers: Influencers) {
        if (!influencers.nome) {
            throw new Error("Nome não pode ser nulo ou em branco!");
        }

        if (!influencers.numeroSeguidores) {
            throw new Error("Número de seguidores não pode ser nulo ou em branco!");
        }

        if (!influencers.principalRedeSocial) {
            throw new Error("Rede social não pode ser nula ou em branco!");
        }  
        
        if (typeof influencers.nome !== "string") {
            throw new Error("Nome deve ser um texto!");
        }

        if (typeof influencers.numeroSeguidores !== "number") {
            throw new Error("Número de seguidores deve ser um número!");
        }
        
        if (typeof influencers.principalRedeSocial !== "string") {
            throw new Error("Rede social deve ser um texto!");
        } 
        
        if (influencers.numeroSeguidores < 0.00) {
            throw new Error("Número de seguidores deve ser zero ou positivo!");
        }

        const redesocial = ["Instagram", "Fabebook", "Twitter", "TikTok"];

        if (!redesocial.includes(influencers.principalRedeSocial)) {
            throw new Error("Rede social deve ser válida!");
        }
    }

    public static validateId(id: string): ObjectId {
        try {
            return new ObjectId(id);
        } catch (error) {
            throw new Error("Id inválido");
        }
    }   
}