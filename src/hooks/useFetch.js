import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

const [infoAPI, setInfoAPI] = useState()

const getApi=()=>{
    axios.get(url)
    .then(res=>setInfoAPI(res.data))
    .catch(err=>console.log(err))
}
const getTypeApi=(urlType)=>{
    axios.get(urlType)
    .then(res=>{
        res.data
        const obj={
            results:res.data.pokemon.map(e=>e.pokemon)
        }
        setInfoAPI(obj)
    })
    .catch(err=>console.log(err))
}
 return[ infoAPI, getApi, getTypeApi ]
}
//manejo de errores y pantalla de carga

export default useFetch