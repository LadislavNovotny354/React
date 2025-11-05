import "./ResetButton.css"

const ResetButton = (props) => {
    return (
        <button className="btn" onClick ={props.reset}>Resetovat tlačítko</button>
    )
}

export default ResetButton 