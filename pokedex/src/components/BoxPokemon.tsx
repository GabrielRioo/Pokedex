import '../assets/styles/BoxPokemon.css'

export function BoxPokemon({pokemonName}: any) {
  return(
      <div className="box-pokemon">
        <p>{pokemonName}</p>
      </div>
  )
}