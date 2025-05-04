import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Healthyfoods from './pages/Healthyfoods'
import FoodsAdd from './pages/FoodsAdd'
import FoodsDetail from './pages/FoodsDetail'
import NotFound from './pages/NotFound'
import FoodEdit from './pages/FoodEdit'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Healthydrinks from './pages/pages/Healthydrinks'
import DrinksDetail from './pages/pages/DrinksDetail'

import './App.css'
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
     <Route path="/" element={< Home/>} />
     <Route path="/signup" element={< Signup/>} />
     <Route path="/login" element={< Login/>} />
     <Route path="/logout" element={< Logout/>} />
     <Route path='/healthyfoods' element={<Healthyfoods/>}/>
     <Route path='/healthydrinks' element={<Healthydrinks/>}/>
     <Route path='/healthyfoods/new' element={<FoodsAdd/>}/>
     <Route path='/healthyfoods/:id' element={<FoodsDetail/>}/>
     <Route path='/healthydrinks/:id' element={<DrinksDetail/>}/>
     <Route path='/healthyfoods/:id/edit' element={<FoodEdit/>}/>
     <Route path='*' element={<NotFound/>}/>
     

      </Routes>
    </BrowserRouter>
    
  )
}

export default App
