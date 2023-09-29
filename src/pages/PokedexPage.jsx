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
    const url= 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
    const [ pokemons, getPokemons,getTypePokemon ]=useFetch(url)

    const pokemon_Name=pokemons?.filter(pokemon=>pokemon.name.toLowerCase().includes(inputValue?.toLocaleLowerCase()))
    console.log(pokemons)
    const logicPage=()=>{
      const poke_por_page=20
      const sliceStart=(currenPage -1)*poke_por_page
      const sliceEnd=sliceStart+poke_por_page
      const pokeinpage=pokemon_Name.slice(sliceEnd,sliceStart)

      const lastPage=Math.ceil(pokemon_Name.lenght/poke_por_page)||1

      const pagesBlock=5
      const actualblock=Math.ceil(currenPage/pagesBlock)

      const pagesinBlock=[]
      const minpag= (actualblock-1)*poke_por_page+1
      const maxPage=actualblock*poke_por_page

      for(let i=minpag;i<=maxPage;i++){
        if(i<=lastPage){
          pagesinBlock.push(i)
        }
      }
      return{pokeinpage,lastPage,pagesinBlock}
    }
    const{pokeinpage,lastPage,pagesinBlock}=logicPage

   

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

    const pokeFiltered=pokemons?.results.filter(poke=>poke.name.includes(inputValue))
    
    
  return (
    <div>
      <div className="title_two">
        <img className="poke_title" src="/second_title.jpg" alt="" />
        <p className="trainer_poke">Hi {trainer}</p>
        <form className="form_pokemon" onSubmit={handleSubmit} >
          <input className="input_pokemon" ref={inputSearch} type="text" placeholder="input name of the pokemon"/>
          <button className="search_btn">Search</button>
        </form>
        <section>
          <ul>
            <li >{'<<'}</li>
            <li >{'<'}</li>
          
            <li>{'>'}</li>
            <li>{'>>'}</li>
          </ul>
        </section>
     
      <div className="poke_select">
        <SelecType 
        setTypeSelecter={setTypeSelecter}
        />
         </div>
        <div className="card_poke">
          {
            pokeFiltered?.map(poke =>(
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