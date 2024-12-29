import { useState } from 'react'
import LoginPage from './Resources/LoginRegister'
import {BrowserRouter,Routes,Route} from 'react-router'
import './App.css'
import DashBoard from './Resources/Dashboard'
import AccountSetup from './Resources/AccountSetup'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path = "/user-management" element={<DashBoard activePage={"user-management"} />} />
          <Route path = "/account-setup" element={<AccountSetup/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
