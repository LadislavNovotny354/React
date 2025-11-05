import {useState, useEffect} from 'react'

const App = () => {
   //vypisuje se v consoli jako poslední
    //vždycky po načtení stránky - obnovu stránky způsobuje useState rendruje stránku a 
    // useEffect se spouští na konci po renderu
 

  const [value, setValue] = useState(0) //inicializační hodnota 0
  const [test, testValue] = useState(0) //na nulu východí hodnota /původní hodnota
   console.log('text úplně nahoře')

  useEffect( () => {
     
     const button = document.querySelector('.btn')

    if (value >= 1 ) {
    
     console.log(button) 
     button.textContent = `Kliknuto č. ${value}`   //změní text na tlačítku -> pomocí template string nebo button.textContent = 'Kliknuto č. ' + value

     } else {
      button.textContent = 'klikni'
     }

    
     console.log('První useEffect klikni')
  }, [value]) //prázdné pole znamená, že se useEffect spustí pouze jednou po prvním renderu komponenty nebo vynechám
//  pole s hodnotou znamená, že se useEffect spustí pouze při změně hodnoty v poli


  useEffect( () => {
    document.title = `Nový titulek ${test}` //změní název stránky JS 
    console.log('Druhý useEffect titulek')
  }, [test]) //spustí se pouze při změně hodnoty test


  console.log('text před return')
  return (
    <div>
      <h1>useState a useEffect</h1>
      <p>{value}</p>
      {console.log("Já jsem return")}
      <button className ="btn" onClick ={() => setValue(value + 1)}>klikni</button>

      <button className ="btn-test" onClick = {() => testValue(test + 1)}>Titulek</button>
    </div>
  )

}

export default App

// useState je hook, který nám umožňuje přidat stav do funkčních komponent.
// useEffect je hook, který nám umožňuje provádět vedlejší efekty v komponentách.

// useState se spouští při každém renderu komponenty, zatímco useEffect se spouští
// po renderu a může být nakonfigurován tak, aby se spouštěl pouze při změně určitých hodnot.

// V tomto příkladu se useState spouští jako první, protože je volán při každém renderu.
// useEffect se spouští jako poslední, protože je volán po renderu komponenty.
// Když klikneme na tlačítko, hodnota se zvýší o 1, což způsobí nový render komponenty.
// Po renderu se znovu spustí useEffect, protože se spouští po každém renderu.
// useEffect bez druhého argumentu (pole závislostí) se spustí po každém renderu.
// Pokud bychom chtěli, aby se useEffect spouštěl pouze při změně hodnoty "value",