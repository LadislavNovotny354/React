//import { useState, useEffect } from 'react'
import './App.css'
// import { motion } from "framer-motion"
import Header from './components/Header'
import Section from './components/Sections'

function App() {
  
   

  return (
    <> {/* Menu */}

       <Header />

          <Section
        title="Chamber of Secrets"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sint."
        bgImage="/img/bg-2.jpg"
        orderBtnColor="bg-green-950"
      />

      <Section
        title="The prisoner of Azkaban"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sint."
        bgImage="/img/bg-3.jpg"
        orderBtnColor="bg-slate-600"
      />
    </>
  )
}

export default App
