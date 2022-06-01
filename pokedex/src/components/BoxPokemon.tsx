import { useEffect, useState } from "react";
import "../assets/styles/BoxPokemon.css";
import { useFetch } from "../hooks/useFetch";
import Pokebola from '../assets/images/Pokebola.png'

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

export function BoxPokemon({ pokemonName, pokemonId }: any) {
  const [pokemonSprite, setPokemonSprite] = useState<string | undefined>("");
  const [boxColor, setBoxColor] = useState("");

  useEffect(() => {
    setPokemonSprite(pokemon?.sprites?.other?.home.front_default);

    if (pokemon?.types?.[0]?.type?.name === "normal") setBoxColor("#dadada");
    if (pokemon?.types?.[0]?.type?.name === "fighting") setBoxColor("#a03a1e");
    if (pokemon?.types?.[0]?.type?.name === "flying") setBoxColor("#9cc5da");
    if (pokemon?.types?.[0]?.type?.name === "poison") setBoxColor("#a63daf");
    if (pokemon?.types?.[0]?.type?.name === "ground") setBoxColor("#702929");
    if (pokemon?.types?.[0]?.type?.name === "rock") setBoxColor("##8b744d");
    if (pokemon?.types?.[0]?.type?.name === "bug") setBoxColor("#6ab14e");
    if (pokemon?.types?.[0]?.type?.name === "ghost") setBoxColor("#5c3d62");
    if (pokemon?.types?.[0]?.type?.name === "steel") setBoxColor("#888F97");
    if (pokemon?.types?.[0]?.type?.name === "fire") setBoxColor("#DA2408");
    if (pokemon?.types?.[0]?.type?.name === "water") setBoxColor("#0777CB");
    if (pokemon?.types?.[0]?.type?.name === "grass") setBoxColor("#1D9228");
    if (pokemon?.types?.[0]?.type?.name === "electric") setBoxColor("#F5DE0F");
    if (pokemon?.types?.[0]?.type?.name === "psychic") setBoxColor("#e633c5");
    if (pokemon?.types?.[0]?.type?.name === "ice") setBoxColor("#24dfec");
    if (pokemon?.types?.[0]?.type?.name === "dragon") setBoxColor("#1462a2");
    if (pokemon?.types?.[0]?.type?.name === "dark") setBoxColor("#5f4128");
    if (pokemon?.types?.[0]?.type?.name === "fairy") setBoxColor("#ee96d0");
    if (pokemon?.types?.[0]?.type?.name === "shadow") setBoxColor("#173250");
  }, []);

  const { data: pokemon } = useFetch<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  return (
    <>
      <div className="box-pokemon" style={{ backgroundColor: boxColor }}>
        {pokemonSprite !== undefined && (
          <img
            src={pokemonSprite}
            alt="Imagem do Pokemon"
            className="img-pokemon"
          />
        )}

        <p className="name-pokemon">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</p>
        <div className="content-pokebola">
          <img src={Pokebola} alt="Pokebola de fundo" className="background-pokebola"/>
          <p className="id-pokemon">{pokemonId}</p>  
        </div>
      </div>   
    </>
  );
}
