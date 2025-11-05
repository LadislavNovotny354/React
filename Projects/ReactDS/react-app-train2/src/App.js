// UseState(), UseEffect(), useContext = hooks, 
import Example from "./components/Example"

const App = () => {
    return (
        <div className ="changer">
            <Example />
        </div>
    )
}

export default App;


// komponenta je obyčejná funkce, má stejný název jako soubor
// komponenta musí mít return
// return, musí něco být

//na konci musí být export default App;

// komponenta se pak importuje do index.js a tam se vyrendruje do HTML