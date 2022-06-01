import { useEffect, useState } from "react";
import { BoxPokemon } from "../../components/BoxPokemon";
import { useFetch } from "../../hooks/useFetch";

type AllPokemon = {
  count: number;
  next: string;
  previous?: any;
  results: [{ name: string; url: string }];
};



type PokemonType = {
  results: [
    {
      name: string;
    }
  ];
};

export function SearchPokemon() {

  const { data: all_pokemons } = useFetch<AllPokemon>(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=100"
  );
  
  return (
    <>
      <div className="box-pokemon-content">
        {all_pokemons?.results?.map((item) => {
          return (
            <>
              <BoxPokemon
                pokemonName={item.name}
                pokemonId={item.url.split("/").at(-2)?.toString()}
                key={item.name}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
