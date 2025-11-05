import "./AllDeleteButton.css"

    const AllDeleteButton = ({deleteAll}) => {
        return (
                <button className="main-delete-button" onClick={deleteAll}>Smazat vše</button>
        )
    }

export default AllDeleteButton


