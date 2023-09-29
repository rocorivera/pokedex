import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
 

const PokedexIdPage = () => {

   const { id }  = useParams()

   const url=`https://pokeapi.co/api/v2/pokemon/${id}`
     const [ pokemon, getPokemon ]  =useFetch(url)

     useEffect(()=>{
        getPokemon()
     },[id])
     console.log(pokemon)

  return (
    <div className="id_id">
      <img  className="id_pokeimg" src="/poke.png" alt="" />
      <div  className={`id_complet ${pokemon?.types[0].type.name}-border`}>
      <div className={`id_poke ${pokemon?.types[0].type.name}-gradient`}>
        <img  className="id_img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        <h2 className={`id_h2 ${pokemon?.types[0].type.name}-color`} >{pokemon?.name}</h2>
        <ul className="ul_id">
            <li><span className="s_id1"> weight </span><span className="sp_id" > {pokemon?.weight}</span></li>
            <li><span className="s_id2"> height </span><span className="sp_id"> {pokemon?.height}</span></li>
        </ul>
        <div className="ul_type">
         <div className="ty_poke">Types </div>  
        <div className="li_types">
           {
               
               pokemon?.types.map(typeInfo=> (
                <div className={`li_type ${typeInfo.type.name}-type`} key={typeInfo.type.url}>{typeInfo.type.name}</div>
             ))
           }
         </div>
         <div className="ty_poke">Ability</div>
         <div className="li_types" >
           {
            pokemon?.abilities.map(abilitInfo=>(<div className="li_type" key={abilitInfo.ability.url} >{abilitInfo.ability.name}</div>))
           }
           </div>
        </div>
        <div>
        </div>
            {
               <div className="stats_id">Stats</div>
            }
            {
               pokemon?.stats.map(infoStats=>(<div className="stat_id" key={infoStats.stat.url}><span className="infostat">{infoStats.stat.name}</span><span className="basestat">{infoStats.base_stat}</span><div className="img_stats" ></div><div className="img_stat"></div></div>))
            }
         </div>
      </div>
         <div className={`moves ${pokemon?.types[0].type.name}-border`}>
            {
               <div className="move_title">Moves</div>
            }
            <div className="poke_moves">
            {
               pokemon?.moves.map(infoMov=>(<div className="poke_move" key={infoMov.move.url}>{infoMov.move.name}</div> ))
            }
            </div>
         </div>
    </div>
  )
}

export default PokedexIdPage