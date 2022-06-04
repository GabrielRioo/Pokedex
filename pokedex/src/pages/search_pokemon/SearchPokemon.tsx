import { useEffect, useState } from "react";
import { BoxPokemon } from "../../components/Pokemon/BoxPokemon";
import {Pokedex} from "../../components/Podedex";
import { useFetch } from "../../hooks/useFetch";

import './SearchPokemon.css';
import { Filter } from "../../components/Filter";
import { FilterType } from "../../data/FilterType";

type AllPokemon = {
  count: number;
  next: string;
  previous?: any;
  results: [{ name: string; url: string }];
};

export function SearchPokemon() {
  const { data: all_pokemons } = useFetch<AllPokemon>(
    "https://pokeapi.co/api/v2/pokemon"
  );

  return (
    <>
      <div className="content-home-page">
        <Pokedex />

        <div className="filter-pokemon">
          <Filter nameFilter="Type 1" options={FilterType}/>
          <Filter nameFilter="Type 2" options={FilterType}/>
          <Filter nameFilter="Weakness" options={FilterType}/>
        </div>

        <div className="box-pokemon-content">
          {all_pokemons?.results?.map((item) => {
            return (
              <>
                <BoxPokemon
                  pokemonName={item.name}
                  pokemonId={item.url.split("/").at(-2)?.toString()}
                  key={item.url.split("/").at(-2)?.toString()}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
