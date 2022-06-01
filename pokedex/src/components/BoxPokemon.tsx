import { useEffect, useState } from 'react';
import '../assets/styles/BoxPokemon.css'
import { useFetch } from '../hooks/useFetch';

type Pokemon = {
  id: number;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
};

export function BoxPokemon({pokemonName, pokemonId}: any) {
  const [pokemonSprite, setPokemonSprite] = useState<string | undefined>("");

    const { data: pokemon } = useFetch<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );

    useEffect(() => {
      setPokemonSprite(pokemon?.sprites?.other?.home.front_default)
    }, [])

  return(
      <div className="box-pokemon">
        {/* {pokemon?.id == pokemonId &&} */}
        <img src={pokemonSprite} alt="Imagem do Pokemon" className="img-pokemon"/>
        <p>{pokemonName}</p>
      </div>
  )
}