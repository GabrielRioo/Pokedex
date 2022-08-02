import { useEffect, useState } from "react";
import "../../assets/styles/BoxPokemon.css";
import { useFetch } from "../../hooks/useFetch";
import Pokebola from "../../assets/images/Pokebola.png";
import { Pokedex } from "../Podedex";
import { PokemonInfo } from "./PokemonInfo";
import { PokemonInfoReverse } from "./PokemonInfoReverse";

type Pokemon = {
  id: number;
  sprites: {
    other: {
      home: {
        front_default: string;
        front_shiny: string;
      };
      "oficial-artwork": {
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
    },
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
};

// export function PokedexImage(image: string | undefined) {
//   return pokedexImage = image;
// }

function FilterType() {
  
}

export function BoxPokemon({ pokemonName, pokemonId }: any) {
  const [pokemonNormalSprite, setPokemonNormalSprite] = useState<
    string | undefined
  >("");
  const [pokemonShinySprite, setPokemonShinySprite] = useState<
    string | undefined
  >("");
  const [boxColor, setBoxColor] = useState("");
  const [boxColor2, setBoxColor2] = useState("");
  const [showAttributes, setShowAttributes] = useState(true); 

  useEffect(() => {
    setPokemonNormalSprite(pokemon?.sprites?.other?.home.front_default);
    setPokemonShinySprite(pokemon?.sprites?.other?.home.front_shiny);

    if (pokemon?.types?.[0]?.type?.name === "normal") setBoxColor("#dadada");
    if (pokemon?.types?.[1]?.type?.name === "normal") setBoxColor2("#dadada");
    if (pokemon?.types?.[0]?.type?.name === "fighting") setBoxColor("#a03a1e");
    if (pokemon?.types?.[1]?.type?.name === "fighting") setBoxColor2("#a03a1e");
    if (pokemon?.types?.[0]?.type?.name === "flying") setBoxColor("#9cc5da"); 
    if (pokemon?.types?.[1]?.type?.name === "flying") setBoxColor2("#9cc5da");
    if (pokemon?.types?.[0]?.type?.name === "poison") setBoxColor("#a63daf");
    if (pokemon?.types?.[1]?.type?.name === "poison") setBoxColor2("#a63daf");
    if (pokemon?.types?.[0]?.type?.name === "ground") setBoxColor("#702929"); 
    if (pokemon?.types?.[1]?.type?.name === "ground") setBoxColor2("#702929");
    if (pokemon?.types?.[0]?.type?.name === "rock") setBoxColor("#8b744d"); 
    if (pokemon?.types?.[1]?.type?.name === "rock") setBoxColor2("#8b744d");
    if (pokemon?.types?.[0]?.type?.name === "bug") setBoxColor("#6ab14e");
    if (pokemon?.types?.[1]?.type?.name === "bug") setBoxColor2("#6ab14e"); 
    if (pokemon?.types?.[0]?.type?.name === "ghost") setBoxColor("#5c3d62");
    if (pokemon?.types?.[1]?.type?.name === "ghost") setBoxColor2("#5c3d62");
    if (pokemon?.types?.[0]?.type?.name === "steel") setBoxColor("#888F97");
    if (pokemon?.types?.[1]?.type?.name === "steel") setBoxColor2("#888F97");
    if (pokemon?.types?.[0]?.type?.name === "fire") setBoxColor("#DA2408");
    if (pokemon?.types?.[1]?.type?.name === "fire") setBoxColor2("#DA2408");
    if (pokemon?.types?.[0]?.type?.name === "water") setBoxColor("#0777CB");
    if (pokemon?.types?.[1]?.type?.name === "water") setBoxColor2("#0777CB");
    if (pokemon?.types?.[0]?.type?.name === "grass") setBoxColor("#1D9228");
    if (pokemon?.types?.[1]?.type?.name === "grass") setBoxColor2("#1D9228");
    if (pokemon?.types?.[0]?.type?.name === "electric") setBoxColor("#F5DE0F");
    if (pokemon?.types?.[1]?.type?.name === "electric") setBoxColor2("#F5DE0F");
    if (pokemon?.types?.[0]?.type?.name === "psychic") setBoxColor("#e633c5");
    if (pokemon?.types?.[1]?.type?.name === "psychic") setBoxColor2("#e633c5");
    if (pokemon?.types?.[0]?.type?.name === "ice") setBoxColor("#24dfec");
    if (pokemon?.types?.[1]?.type?.name === "ice") setBoxColor2("#24dfec");
    if (pokemon?.types?.[0]?.type?.name === "dragon") setBoxColor("#1462a2");
    if (pokemon?.types?.[1]?.type?.name === "dragon") setBoxColor2("#1462a2");
    if (pokemon?.types?.[0]?.type?.name === "dark") setBoxColor("#5f4128");
    if (pokemon?.types?.[1]?.type?.name === "dark") setBoxColor2("#5f4128");
    if (pokemon?.types?.[0]?.type?.name === "fairy") setBoxColor("#ee96d0");
    if (pokemon?.types?.[1]?.type?.name === "fairy") setBoxColor2("#ee96d0");
    if (pokemon?.types?.[0]?.type?.name === "shadow") setBoxColor("#173250");
    if (pokemon?.types?.[1]?.type?.name === "shadow") setBoxColor2("#173250");
  }, []);

  const { data: pokemon } = useFetch<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  return (
    <>
    {}
      <div
        className="box-pokemon"
        style={{ backgroundColor: boxColor, transition: "1s" }}
        onClick={
          () => setShowAttributes(!showAttributes)
          // Pokedex(pokemon?.sprites?.other?.home.front_default.toString())  
        } 
      >
        {showAttributes === true ? (
          <>
            <PokemonInfo
              pokemonId={pokemonId} 
              pokemonName={pokemonName} 
 
              pokemonType1={pokemon?.types[0]?.type.name}
              pokemonType2={pokemon?.types[1]?.type.name}

              pokemonNormal={pokemonNormalSprite}
              pokemonShiny={pokemonShinySprite}

              badgeTypeColor1={boxColor}
              badgeTypeColor2={boxColor2}
            />
          </>
        ) : (
          <PokemonInfoReverse 
            pokemonTypeId={pokemon?.types?.[0].type?.url.split("/").at(-2)?.toString()}  
            show={showAttributes} 

            pokemonNormal={pokemonNormalSprite}
            pokemonName={pokemonName} 

            pokemonType1={pokemon?.types[0]?.type.name}
            pokemonType2={pokemon?.types[1]?.type.name}

            badgeTypeColor1={boxColor}
            badgeTypeColor2={boxColor2}
          />
        )}
      </div>
    </>
  );
}
