import "./IncreaseButton.css"

const IncreaseButton = (props) => {

    return (
        <button className="btn" onClick={props.increase}>Zvýšit o 1</button>
    )
}

export default IncreaseButton