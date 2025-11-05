import "./Book.css" // Importing the CSS file for styling
import OrderButton from "./OrderButton"

const Book = (props) => {
    return (
        <div className="single-book">
            <img src= {props.myimage} alt = "book" />
            <h2 className = "main-hedding">Book Component </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at reiciendis pariatur libero veniam nisi, doloremque expedita explicabo consequuntur, animi saepe delectus debitis laboriosam commodi inventore cupiditate neque vitae nemo.</p>
            <OrderButton />
        </div>
    )
}

export default Book