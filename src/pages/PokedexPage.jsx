import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPages/PokeCard"
import SelecType from "../components/PokedexPages/SelecType"



const PokedexPage = () => {

  const [currenPage, setCurrenPage] = useState(1)

  const [inputValue, setInputValue ] = useState('')

  const [typeSelecter, setTypeSelecter] = useState('all Pokemons')

    const trainer =useSelector(store=>store.trainer)
    const url= 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1286'
    const [ pokemons, getPokemons,getTypePokemon ]=useFetch(url)

const pokeFiltered=pokemons?.results.filter(poke=>poke.name.toLowerCase().includes(inputValue?.toLowerCase()))
   
    
    
      const pokePorPage=20
      const lastIndex=currenPage*pokePorPage
      const firstIndex=lastIndex-pokePorPage
      const pokepaginated=pokeFiltered?.slice(firstIndex,lastIndex)

    
    
    
    

    const handledBack=()=>{
      setCurrenPage(currenPage-1||currenPage >=1 )
    }
    const handleNext=()=>{
      setCurrenPage(currenPage+1 )
    }
   
   


    useEffect(()=>{
      if(typeSelecter==='all Pokemons'){
      getPokemons()
      }else{
        getTypePokemon(typeSelecter)
      }
    },[typeSelecter])
    
    const inputSearch =useRef()

    const handleSubmit=(e)=>{
      e.preventDefault()
     setInputValue (inputSearch.current.value.trim().toLowerCase())
    }

   
    
    
  return (
    <div>
      <div className="title_two">
        <img className="poke_title" src="/second_title.jpg" alt="" />
        <p className="trainer_poke">Hi {trainer}</p>
        <form className="form_pokemon" onSubmit={handleSubmit} >
          <input className="input_pokemon" ref={inputSearch} type="text" placeholder="input name of the pokemon"/>
          <button className="search_btn">Search</button>
        </form>
        <section className="paginacion_poke">
          
         <div>
          <img className="btn_back" onClick={handledBack} src="/back.png" alt="" />
         </div>

        <div>
          <img onClick={handleNext} className="btn_next" src="public/next.png" alt="" />
        </div>
        
        </section>
     
      <div className="poke_select">
        <SelecType 
        setTypeSelecter={setTypeSelecter}
        />
         </div>
        <div className="card_poke">
          {
            pokepaginated?.map(poke =>(
              <PokeCard 
                key={poke.url}
                url={poke.url}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PokedexPage