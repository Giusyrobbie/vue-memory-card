export interface Card {
    code: number;
    visible: boolean;
    name: string;
    matched: boolean;
    urlImage: string;
}


export const pokemonResponseAdapter = (data): Card => {
   const {name, sprites } = data;
   return {
       code: null,
       name: name,
       matched: false,
       visible:false,
       urlImage: sprites.other.dream_world.front_default
   }
}