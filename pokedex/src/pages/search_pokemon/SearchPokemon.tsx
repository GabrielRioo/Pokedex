import { useEffect, useState } from "react";
import { BoxPokemon } from "../../components/BoxPokemon";
import {Pokedex} from "../../components/Podedex";
import { useFetch } from "../../hooks/useFetch";

import './SearchPokemon.css';

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
    "https://pokeapi.co/api/v2/pokemon"
  );

  return (
    <>
      <div className="content-home-page">
        <Pokedex />
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
      </div>
    </>
  );
}
