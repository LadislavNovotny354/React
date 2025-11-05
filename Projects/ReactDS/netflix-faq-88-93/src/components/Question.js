
import "./Question.css"
import {useState} from "react"

const Question = ({title, info}) => {  
    const [show, setShow] = useState(false)
    return ( <div className="one-question">
            <section>
                  <h2>{title}</h2>
                  <button onClick={() => setShow(!show)}>Odpověď</button>
             </section>
             {show && <p>{info}</p>
                // pomocí fce setShow a negace !show změním na hodnotu true po kliknutí
                // pokud show je false nevracej nic, pokud show true vratí se info
             }
          
        </div>
    )
}

export default Question