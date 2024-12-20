import { useState } from 'react'
import LoginPage from './Resources/LoginRegister'
import {BrowserRouter,Routes,Route} from 'react-router'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
