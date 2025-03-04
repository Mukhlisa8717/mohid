import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from "./components/navbar/Navbar"
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
