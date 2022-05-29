import { BoxPokemon } from "../../components/BoxPokemon";
import { useFetch } from "../../hooks/useFetch";

type Pokemon = {
  count: number;
  next: string;
  previous?: any;
  results: [{ name: string; url: string }];
};

export function SearchPokemon() {
  const { data } = useFetch<Pokemon>("https://pokeapi.co/api/v2/pokemon");

  return (
    <>
      <div className="box-pokemon-content" >
        {data?.results?.map((item) => {
          return <BoxPokemon pokemonName={item.name} key={item.name}/>;
        })}
      </div>
    </>
  );
}
