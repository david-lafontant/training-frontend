import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import AddLibrary from './utils/addLibrary';
import { About, Contact, Home, NotFound, Register, Trainings } from './pages/index';
import { Layout } from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'
import React from "react";


function App() {
  useEffect(()=>{AddLibrary('./src/utils/bs-init.js')},[])

  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="a-propos" element={<About />} />
            <Route path="formations" element={<Trainings />} />
            <Route path="contactez-nous" element={<Contact />} />
            <Route path="inscription" element={<Register />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </React.Fragment>
    </BrowserRouter>

  )
}

export default App
