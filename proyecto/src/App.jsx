import { Box } from '@chakra-ui/react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main2/Main2'
import { Footer } from './Components/Footer/Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  return (
    <>
      
      <Header/>
      <Main/>
      <Footer/>

    </>
      
  )
}

export default App
