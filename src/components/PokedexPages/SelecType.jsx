import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"


function SelecType({setTypeSelecter}) {

    const url='https://pokeapi.co/api/v2/type'
    const [ types, getTypes ] =useFetch(url)

    useEffect(()=>{
        getTypes()
    },[])

    const handleChange=(e)=>{
       setTypeSelecter (e.target.value)
    }

  return (
    <div >
        <select className="value_poke"  onChange={handleChange}>
            <option className="option_poke" value='all Pokemons'>All Pokemons</option>
            {
                types?.results.map(typesInfo=>(<option key={typesInfo.url} value={typesInfo.url}className="type_poke">{typesInfo.name}</option>))
            }
        </select>
    </div>
  )
}

export default SelecType