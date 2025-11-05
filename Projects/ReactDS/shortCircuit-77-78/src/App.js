
//Short circuit evalution
const App = () => {

  const value = 90
  const value2 = ""

  const result = value && "" //pokud je value true, vrátí se druhá hodnota, pokud je value nepravda, vrátí se value
  console.log(result) //výpis do konzole

  //const result = value && 555 vrátí 555, value je true a vždycky se vrací druhá hodnota!
  //const result = 5 > 2 && 100 > 80 vrátí true
  // value = 0 je nepravda, vrátí se první hodnota 0


  //sumarum
  //první je true a druhá taky = se vrací druhá hodnota
  //první je false a druhé jakékoliv = vrací se první hodnota

  //v JS jsou pravdivé hodnoty: true, čísla kromě 0, neprázdné řetězce, objekty, pole
  //v JS jsou nepravdivé hodnoty: false, 0, NaN, null, undefined, prázdný řetězec ""

  const result2 = value2 || 888 
  // první je true a druhé jakékoliv = vrací se první
  // první je false a druhé jakékoliv = vrací se druhá
  //první je false a druhé taky = vrací se druhá
  console.log (result2)


  return (
    <div>
      <h1>{value || "Defaultní text"}</h1>
     
    </div>
  )
}

export default App