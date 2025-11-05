import "./MovieDeleteButton.css"

const MovieDeleteButton = ({deleteMovie}) => {
    
    
    return (
        <button className="movie-delete-button" onClick ={deleteMovie}>Smazat film</button>
    )
}

export default MovieDeleteButton

//In your MovieDeleteButton component, you use (props) as the function parameter to
    // receive properties passed from the parent component. 
    // This allows you to access props.deleteMovie and assign it to the button's onClick handler.
//
// Instead of:
// const MovieDeleteButton = (props) => {
//     return <button onClick={props.deleteMovie}>Smazat film</button>;
// }

// Use destructuring:
// const MovieDeleteButton = ({ deleteMovie }) => {
//     return <button onClick={deleteMovie}>Smazat film</button>;
// }
//