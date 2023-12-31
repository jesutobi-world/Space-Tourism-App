import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './components/Pages/Home.tsx'
import { Crew } from './components/Pages/Crew.tsx'
import { Destination } from './components/Pages/Destination.tsx'
import { Technology } from './components/Pages/Technology.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AnimatePresence mode='popLayout'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
      </AnimatePresence>
    </Router>
  </React.StrictMode>,
)
