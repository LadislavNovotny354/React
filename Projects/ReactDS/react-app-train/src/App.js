//kód funkce , obyčejná komponenta, stejný název jako názerv souboru, komponenta obsahuje return
//return dokáže vrátit pouze 1 element, proto je vše zabaleno v divu
import Book from "./components/Book"

const App = () => {
    const books = [ //pole objektů
        {
            id: 1,
            image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
            title: "Harry Potter a Kámen mudrců"
        },
        {
            id: 2,
            image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
            title: "Harry Potter a Tajemná komnata"
        },
        {
            id: 3,
            image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
            title: "Harry Potter a Vězeň z Azkabanu"
        }
    ]

    return (
        // JSX umožňuje psát HTML do JS v reactu 
        // do jSX můžeme vkládat i JS kód, ale musí být v {}

        <div className="all-books">
            <h1>Website by react ver {0+ 1}</h1>
            <Book myimage={books[0].image} mytitle={books[0].title} />
            <Book myimage={books[1].image} mytitle={books[1].title} />
            <Book myimage={books[2].image} mytitle={books[2].title} />
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>

    )
}

export default App // název exportu důležité a musí být stejný jako název komponenty a souboru