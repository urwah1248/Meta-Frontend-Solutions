import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'
import { AlertProvider } from './context/alertContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlertProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AlertProvider>
  </React.StrictMode>,
)
