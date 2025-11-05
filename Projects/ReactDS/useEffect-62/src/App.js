import "./App.css";
import {useState, useEffect} from 'react'


const App = () => {
  // cleanUp function v useEffect se používá k vyčištění efektů, které by mohly způsobit únik paměti nebo jiné problémy.
    // Například, pokud máte efekt, který přidává posluchače událostí nebo nastavuje intervaly, 
    // je důležité tyto efekty vyčistit, když komponenta zanikne nebo když se efekt znovu spustí.

    //krok1: vytvoříme stav pro šířku okna
  const [windowsSize, setWindowsSize] = useState(window.innerWidth) 
  //inicializační window.innerWidth hodnota je šířka okna

  //krok 4: vytvoříme funkci, která bude nastavovat šířku okna
  const sizeControl = () => 
      {setWindowsSize(window.innerWidth)} //funkce, která nastaví šířku okna

  //krok 3: vytvoříme useEffect, který bude sledovat změnu velikosti okna

  useEffect ( () => { 
    window.addEventListener("resize", sizeControl)  //spustí až při změně/eventu momentě když se změní velikost okna windowsSize
    console.log('já jsem useEffect a sleduji změnu velikosti okna')

    //krok 5 video 64 - přidáme cleanUp function, spuoští se až po renderu/změně okna
    return () => {
      console.log('já jsem cleanUp function')
      window.removeEventListener("resize", sizeControl) //odstraní event listener, aby nedocházelo k úniku paměti
    }
  }) // }, [] ) pouze tento řádek video 63. šlo by přes pole, ale pak by se useEffect spouštěl při každém renderu/změně okna

  

  return (

  
    
   //krok 2: vypíšeme šířku okna
  <div>
    <h1>Šířka okna</h1>
    <h2>{windowsSize}</h2>
  </div>
  )
}

export default App