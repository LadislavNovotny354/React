
import {useState, useEffect} from 'react'
const url = "http://api.open-notify.org/iss-now.json"


//Multiple returns in React component
const App = () => {

  
    const [loading, setLoading]= useState(true) //inicializační hodnota true = načítání stránky]
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    useEffect(() => {
      fetch(url)
        .then( (response) => response.json())
        .then( (data) => data["iss_position"]) 
        .then( (position) => {
           console.log(position["latitude"])
           console.log(position["longitude"])
           setLatitude(position["latitude"])
           setLongitude(position["longitude"])
      } )
      setLoading(false) //načítání skončilo
      
    }, [])  //prázdné pole = useEffect se spustí jen jednou po načtení komponenty

   //půjdeme pomocí useState const loading = true //nebo false ale není to praktické
    
    if (loading) {
      return <h2>Načítání stránky</h2>

    } 
      return <>
        <h2>Zěměpisná šířka {latitude}</h2>
        <h2>Zěměpisná délka {longitude}</h2>
      </>
    

}

export default App