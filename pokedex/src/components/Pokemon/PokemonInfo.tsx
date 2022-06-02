import { useEffect, useState } from "react";
import Pokebola from "../../assets/images/Pokebola.png";

export function PokemonInfo(props: any) {
  const [pokemonSprite, setPokemonSprite] = useState<string | undefined>("");

  return (
    <>
      <div
        className="content-pokemon-info"
        onMouseEnter={() => setPokemonSprite(props.pokemonShiny)}
        onMouseOut={() => setPokemonSprite(props.pokemonNormal)}
      >
        <p className="name-pokemon">
          {props.pokemonName.charAt(0).toUpperCase() +
            props.pokemonName.slice(1)}{" "}
          <span
            style={{ backgroundColor: props.badgeTypeColor1 }}
            className="type-pokemon"
          >
            {props.pokemonType1}
          </span>
          {props.pokemonType2 !== undefined && (
            <span
              style={{ backgroundColor: props.badgeTypeColor2 }}
              className="type-pokemon"
            >
              {props.pokemonType2}
            </span>
          )}
        </p>
        {props.pokemonNormal !== undefined && (
          <img
            src={props.pokemonNormal}
            alt="Imagem do Pokemon" 
            className="img-pokemon"
          />
        )}
      </div>

      <div className="content-pokebola">
        <img
          src={Pokebola}
          alt="Pokebola de fundo"
          className="background-pokebola"
        />
        <p className="id-pokemon">{props.pokemonId}</p>
      </div>
    </>
  );
}
