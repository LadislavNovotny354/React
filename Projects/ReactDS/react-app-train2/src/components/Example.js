import "./Example.css"
import {useState} from "react"

const Example =() => {
    console.log("TEST")
    const [title, setTitle] = useState("Muj první title")
    const [buttonText, setButtonText] = useState("Původní text tlačítka");

    //const [value, setValue] = useState() setValue je funkce, která nastavuje hodnotu value a refreshne hodnotu
    
    const buttonHandler = () => {
        setTitle("Novy text v title")
    }

    const buttonHandler2 = () => {
        setTitle("Nový text z 2. tlačítka")
    }

    const deleteAll = () => {
        setTitle("")
    }

    const ButtonChange = () => {
        setButtonText("Nový text tlačítka")
    }

    return (
        <div className ="text-button-changer"> 
         <h2>{title}</h2>
            <button type="button" onClick = {buttonHandler}>Změnit title</button> 
            <button type="button" onClick = {buttonHandler2} >Opět změnit title</button>
            <button type="button" onClick = {deleteAll} >Smazat</button>
            <button type="button" onClick = {ButtonChange}>{buttonText}</button>
        </div>
        // buttonHandler musí být bez závorek jinak se spustí hned při načtení
        //umí vrátit jeden tag ! musí být jeden hlavní tag
    )
} 

export default Example