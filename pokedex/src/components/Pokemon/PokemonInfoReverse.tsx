import { useFetch } from "../../hooks/useFetch";
import "../../assets/styles/PokemonInfoReverse.css";

type PokemonType = {
  damage_relations: {
    double_damage_from: [
      {
        name: string;
      }
    ];
    double_damage_to: [
      {
        name: string;
      }
    ];
    half_damage_from: [
      {
        name: string;
      }
    ];
    half_damage_to: [
      {
        name: string;
      }
    ];
    no_damage_from: [
      {
        name: string;
      }
    ];
    no_damage_to: [
      {
        name: string;
      }
    ];
  };
};

export function PokemonInfoReverse(props: any) {
  const { data: type } = useFetch<PokemonType>(
    `https://pokeapi.co/api/v2/type/${props.pokemonTypeId}`
  );

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
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
        <div hidden={props.show} className="content-weakness-pokemon">
          <div className="section-weakness-pokemon double-damage-from">
            ↑↑ Double Damage From:
            {type?.damage_relations.double_damage_from.map((item) => {
              return <p className="weakness-pokemon">{item.name}</p>;
            })}
          </div>
          <div className="section-weakness-pokemon double-damage-to">
            ↓↓ Double Damage To:
            {type?.damage_relations.double_damage_to.map((item) => {
              return <p className="weakness-pokemon">{item.name}</p>;
            })}
          </div>

          <div className="section-weakness-pokemon half-damage-from">
            ↑ Half Damage From:
            {type?.damage_relations.half_damage_from.map((item) => {
              return <p className="weakness-pokemon">{item.name}</p>;
            })}
          </div>

          <div className="section-weakness-pokemon half-damage-to">
            ↓ Half Damage To:
            {type?.damage_relations.half_damage_to.map((item) => {
              return <p className="weakness-pokemon">{item.name}</p>;
            })}
          </div>

          <div className="section-weakness-pokemon no-damage-from">
            No Damage From:
            {type?.damage_relations.no_damage_from.map((item) => {
              return <p className="weakness-pokemon">{item.name}</p>;
            })}
          </div>

          <div className="section-weakness-pokemon no-damage-to">
            No Damage To:
            {type?.damage_relations.no_damage_to.map((item) => {
              return <p className="weakness-pokemon">{item.name}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
