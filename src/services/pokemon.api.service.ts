import axios from "axios";


export class PokemonApiService {
    public getPokemon(payload: string): Promise<any> {
        return axios.get(` https://pokeapi.co/api/v2/pokemon/${payload}`);
    }
}
