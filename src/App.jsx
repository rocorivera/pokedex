
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomaPage from './pages/HomaPage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPage from './pages/POkedexIdPage'
import ProtectedRoutes from './pages/protectedRoutes'


function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomaPage/>} />
        <Route element={<ProtectedRoutes/>}>
        <Route path='/pokedex' element={<PokedexPage/>} />
        <Route path='/pokedex/:id' element={<PokedexIdPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
