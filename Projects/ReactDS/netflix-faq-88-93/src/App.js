import questions from "./data"
import Question from "./components/Question"

const App = () => {
    return <div className="all-questions">
        {
        questions.map((oneQuestion) => {
            return <Question key={oneQuestion.id} {... oneQuestion}/>
            //dále zapsat title={oneQuestion.title} atd.
        })
        }
    
    </div>
}

export default App 