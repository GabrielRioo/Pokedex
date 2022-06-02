import { useEffect, useState } from "react";
import PokedexImage from "../assets/images/Pokedex.png";

export function Pokedex(texto: any | undefined) {
  const [pokemonSprite, setPokemonSprite] = useState('')

  console.log('texto: ', texto)
  console.log('texto2: ', texto[0])

  // useEffect(() => {
  //   setPokemonSprite(texto[0])
  // }, [texto[0]])

// ############# tentar criar um novo hook ###############

  return(
    <>
        <img src={PokedexImage} alt="" className="pokedex" />
        {texto[0] !== undefined && setPokemonSprite(texto)}
        <p>{pokemonSprite}</p>
    </>
  )
}