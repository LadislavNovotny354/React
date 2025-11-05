import { useEffect, useState } from "react"

const App = () => {

  
  //krok 1: vytvořit stavovou proměnnou pro uložení odkazu
  const url = "http://api.open-notify.org/iss-now.json"

  //krok 3: vytvořit stavovou proměnnou pro uložení hodnoty GPS
  const [gps, setGPS] = useState("Výchozí hodnoty GPS") 

  //další možnostné stavové proměnné pro šířku a délku, a pro odkaz na mapy.cz
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [urlMap, setUrlMap] = useState("")


  //krok 2: vytvořit fce pro získání dat z API
  const getGPS = async () => { //asynchronní fce
    const response = await fetch(url) //počká, až se data stáhnou
    const data = await response.json() //počká, až se data převedou do JSON formátu
    const finalGPS = `Lat: ${data.iss_position.latitude} , Lon: ${data.iss_position.longitude}` //získání konkrétní hodnoty z JSON objektu
    setGPS(finalGPS) //uložení hodnoty do stavové proměnné

   
    //další možnostné uložení hodnot do stavových proměnných pro šířku a délku
    const Lat = data.iss_position.latitude
    setLatitude(Lat)
    const Lon = data.iss_position.longitude
    setLongitude(Lon)

    setUrlMap(`https://mapy.com/cs/turisticka?x=${Lon}&y=${Lat}&z=8`) //vytvoření odkazu na mapy.cz s použitím hodnot šířky a délky , parametr z=8 = přiblížení mapy

    //konzole
    console.log(data) //výpis do konzole dat z API
    console.log(typeof(data["iss_position"]["latitude"])) //výpis do konzole konkrétní hodnoty z JSON objektu, typeof = zjištění datového typu
    console.log(data["iss_position"]["longitude"]) //výpis do konzole konkrétní hodnoty z JSON objektu
  }
  


  //krok 4: zavolat fci pro získání dat z API v useEffect
  useEffect(() => {
    getGPS() //zavolání fce pro získání dat z API v useEffect aby byla fce zavolána jen jednou po načtení komponenty
  } , []) //prázdné pole = useEffect se spustí jen jednou po načtení komponenty

  return (
    <div>
      <h1>Souřadnice celé: {gps}</h1> 
      <h2>Zeměpisná šířka: {latitude}</h2>
      <p></p>
      <h2>Zeměpisná délka {longitude}</h2>
      <p><a href= {urlMap} target="_blank" rel="noreferrer">Odkaz na mapy.cz</a></p>
      
    </div>
  )
}

export default App
