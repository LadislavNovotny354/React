import "./ReloadButton.css"


const ReloadButton = ({reloadAll}) => {
    return (
            <button className="reload-button" onClick={reloadAll}>Obnovit filmy</button>
    )
}

export default ReloadButton

