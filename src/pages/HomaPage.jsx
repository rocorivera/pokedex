
import { useRef } from "react"

import { useDispatch, useSelector } from "react-redux"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"


const HomaPage = () => {

   const trainer =useSelector( store=>store.trainer)

   

  const inputTrainer = useRef()

  const dispatch =useDispatch()

  const navigate = useNavigate()

  const handleTrainer=(e)=>{
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/Pokedex')
  }

  return (
    <div className="home_poke">
      <div className="pag_poke">
        <img className="title_poke" src="/poke.png" alt="" />
        <h2 className="hi_poke"> Hi trainer</h2>
        <p className="p_poke">to start, please, enter  your trainer name</p>
        <form className="form_poke" onSubmit={handleTrainer} >
            <input className="input_poke" ref={inputTrainer}  type="text" placeholder="input your name trainer 😁" />
            <button className="btn_poke">start!</button>
        </form>
        </div>
    </div>
  )
}

export default HomaPage