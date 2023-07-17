import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Hero } from './Components/Hero/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    
  </React.StrictMode>,
)
