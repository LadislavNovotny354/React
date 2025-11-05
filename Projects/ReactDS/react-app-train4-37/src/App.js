import DecreaseButton from "./components/DecreaseButton"
import IncreaseButton from "./components/IncreaseButton"
import ResetButton from "./components/ResetButton"
import { useState } from "react"

const App = () => {
  
  // const [state, setState] = useState(initialState)
  //původní stav:
  const [value, setValue] = useState(0) 
  // state Hodnota setState - fce která nastaví novou hodnotu , fce useState = použij stav, initialState počáteční stav
  // nastavení nové hodnoty setValue(-10)
  const decreaseOne = () => {
    const newValue = value - 1
    setValue(newValue)   //do setValue se nastaví nová hodnota newValue
  }

  const increaseOne = () => {
    const newValue = value + 1
    setValue(newValue)
  }

  const resetZero = () => {
    setValue(0)
  }

  return (
    <div className ="counter">
       <h1>Počítadlo</h1>
       <h2>{value}</h2>
       <DecreaseButton decrease={decreaseOne}/>
       <IncreaseButton increase={increaseOne}/>
       <ResetButton reset={resetZero}/>
    </div>

  )
}

export default App