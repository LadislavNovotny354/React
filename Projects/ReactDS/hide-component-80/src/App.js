import {useState} from 'react'
import Book from "./components/Book.js"



const App = () => {
  const [show, setShow] = useState(false)

  return <div>
     <button onClick ={() => setShow(!show)}>Ukaž / skryj</button> 
     {/* !show veme false a zneguje na true při kliknutí na tlačítko se změní stavová proměnná show na opačnou hodnotu - */ }

    {show && <Book />} {/* pokud je show true, vykreslí se komponenta Book, pokud je false, nic se nevykreslí */  }
    
  {/* show je false, nic se nevykreslí, show je true, vykreslí se komponenta Book 
  pokud kliknu na tlačítko zneguje se hodnota opakovaně
  */}
  </div>
}

export default App