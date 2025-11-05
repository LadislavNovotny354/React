import "./AllTasks.css"
import data from "../data.js"  
import { useState } from "react"                     

const AllTasks = () => {
    const [myTask, setMyTask] = useState(data) // vychozí hodnota data

      const tasksHandler = (idecko) => {
                    const filteredTasks = myTask.filter( (oneTask) => {
                    return oneTask.id !== idecko
                    
                })

                setMyTask(filteredTasks) // setMyTask

            }
            //kap.35 delete fce
            const allDeleteHandler = () => {
                    setMyTask([]) //setMyTask vezme prázdné pole -> nastaví ho nahoru do (data) a useState přenese do MyTask a  celé refreshne
            }
            //end 

         return  <div>                                   
              {   //JS                             
                                                //oneTask je objekt
                 myTask.map((oneTask) => {      //pomocí fce .map vem z data jednotlivě oneTask a vrať div s H4 hodnotou name 
              

                const {id, name} = oneTask                 //destructor, použiju složené závorky, protože to je objekt, místo pole[]
                return <div className="one-task">  
                          <h4>{name}</h4>     
                          <button type="button" onClick= {() => tasksHandler(id)}>Vymazat</button>       
                        </div> 
         //tasksHandler nesmí mít () jinak se fce spustí po naběhnutí stránky ne po kliknutí!, ale pokud potřebuji id tak vnořím do fce                                               
            })

      
        }

        {/* Next video cap.35 delete fce https://www.youtube.com/watch?v=vEWrydIk9AU&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx&index=35 */}
        <button type="button" className="main-button" onClick={allDeleteHandler}>Vše smazat</button>
        
    </div>
}

export default AllTasks