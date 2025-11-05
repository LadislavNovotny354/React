// ternání operátor
const App = () => {

  const error = false // pokud je false, zobrazí se obsah stránky, pokud je true, zobrazí se chyba
 //zkrácený zápis podmínky 

  //error ? pravda : nepravda , pokud nastavím const error = true, vykreslí se pravda, pokud false, vykreslí se nepravda
  return <div>
    {error ? <p>Chyba - pravda</p> : <div> <p>Nepravda - false</p>
      <h2>Obsah stránky
        </h2>
        <p>Lorem, ipsum dolor sit amet consectetur
           adipisicing elit. Id mollitia veniam veritatis iure i
           psam ipsum quaerat quis provident fuga! Dolor consectetur veniam ducimus aut facere excepturi animi fuga dolorum repellat!</p>
           </div>}
    </div>
    
    
  
}

export default App