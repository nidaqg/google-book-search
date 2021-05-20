import React, {useState, useEffect} from 'react';
import Apiroutes from "../utils/Apiroutes";
import Wrapper from "../components/Wrapper/index";
import ResultCard from '../components/ResultCard';

function Saved() {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        displayBooks();
    }, [])

    const displayBooks= () => {
        Apiroutes.getBooks()
        .then(res => 
            setBooks(res.data))
        .catch(err => console.log(err));
    };

    const deleteBook= (id) => {
        Apiroutes.deleteBook(id)
          .then(res => displayBooks())
          .catch(err => console.log(err));
      }

    return (
        <>
        <Wrapper>
        {books.map(book => (
        <ResultCard  
        id={book._id}
        title={book.title}
        authors={book.authors && book.authors.length>1 ? book.authors.join(", "): book.authors}
        description={book.description}
        image={book.image}
        viewBtn={() => {window.location.href=book.link}}
        secondBtn={"Delete"}
        />
            ))}
            Saved Page
        </Wrapper> 
        </>
    )
}

export default Saved
