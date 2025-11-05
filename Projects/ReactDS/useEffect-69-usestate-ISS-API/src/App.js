import {useEffect, useState} from 'react'

const App = () => {
  const [quote, setQuote] = useState("výchozí text") 

  const url = "https://api.kanye.rest/"

  const getQuote = async () => { 
   const response = await fetch(url) 
   const data = await response.json() 
   const finalQuote = data["quote"]
   setQuote(finalQuote)

 }

 useEffect (() => {
   getQuote() 
 }, []) //prázdné pole = useEffect se spustí jen jednou po načtení komponenty

  return (
    <div>
      <h1>{quote}</h1>
    
    </div>
  )
}

export default App