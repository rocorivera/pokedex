import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/pokeCard.css'

const PokeCard = ({url}) => {

    const navigate =useNavigate()

    const[ pokemon,  getPokemon ]=useFetch(url)
    useEffect(()=>{
        getPokemon()
    },[])
    
    const handleNavigate=()=>{
        navigate(`/pokedex/${pokemon.id}`)
    }

  return (
    <div className="poke_card">
    <article  onClick={handleNavigate} className={`card_total ${pokemon?.types[0].type.name}-border`}>
        <header className={`card_img ${pokemon?.types[0].type.name}-gradient`}>
            <img  className="poke_img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="poke_body">
            <h3 className={`poke_name ${pokemon?.types[0].type.name}-color`}>{pokemon?.name}</h3>
            <ul className="poke_types">
                {
                    pokemon?.types.map(typeInfo=> (
                        <li className={`poke_li ${typeInfo.type.name}-type`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <hr className="poke_hr" />
            <ul className="poke_stats">
                {
                    pokemon?.stats.map(statInfo=>(
                        <li className="poke_stat" key={statInfo.stat.url}><span className="poke_stat_name">{statInfo.stat.name}</span><span className={`poke_stat_info ${pokemon?.types[0].type.name}-color`}>{statInfo.base_stat}</span></li>
                    ))
                }
            </ul>
        </section>
    </article>
    </div>
  )
}

export default PokeCard