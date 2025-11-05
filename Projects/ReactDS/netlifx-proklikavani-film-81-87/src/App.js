import {useState} from "react"
import allMovies from "./data"
import categories from "./categories"


const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState("akční")

  const vysledneFilmy = allMovies.filter((oneMovie) => { //oneMovie je každý jeden film z pole allMovies z data
  return oneMovie["category"] === typeOfMovie
  })
  
  console.log(vysledneFilmy) //výpis do konzole výsledného pole filmů podle kategorie

  return <div>
    <div className="all-buttons">
      {
        //vid 85. vytvořit tlačítka pro každou kategorii z pole categories pomocí fce map
      categories.map((oneCategory, index) => { // //index je pořadové číslo prvku v poli categories - unikátní klíč pro každý prvek v poli, vrací 0,1,2,.. 

        //nastavení stavové proměnné typeOfMovie na hodnotu oneCategory při kliknutí na tlačítko: 
        return <button key={index} onClick={() => setTypeOfMovie(oneCategory)} className="one-button"> 
                 {oneCategory}
               </button>
      })
      } 
    </div>


   
    <div className="all-movies">
      {
         //video 84 zobrazení výsledných filmů podle kategorie pomocí funkce map

        vysledneFilmy.map( (oneMovie) => { //funkce map, oneMovie je každý jeden film z pole vysledneFilmy})
          const {id, image, title, age, tags, description} = oneMovie //destrukturalizace objektu oneMovie, rozložení objektu na jednotlivé proměnné
          
          return <div key={id} className="one-movie">
            <img src ={image} alt="" />
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
            </div>
        })
      }
    </div>
  </div>
}

export default App