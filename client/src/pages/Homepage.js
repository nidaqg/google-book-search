import React, {useState} from 'react';
import InfoCard from '../components/InfoCard';
import ResultCard from '../components/ResultCard';
import SearchBar from '../components/SearchBar';
import Apiroutes from '../utils/Apiroutes';
import './style.css';

function Homepage() {

const [search, setSearch] = useState('');
const [books, setBooks] = useState([]);
const [error, setError] = useState('');



const onInputChange = (e) => {
    setSearch(e.target.value);
};

const handleSearch = (e) => {
e.preventDefault();

Apiroutes.googleSearch(search)
.then(res => {
    if(!res.data.length) {
        setError("No results found, Please try again!");
    } else if (res.data.length) {
    setBooks(res.data.items)
    console.log(books);
    }
})
.catch(err => console.log(err))

}


    return (
        <div className="container-fluid">
        <div className="row justify-content-center text-center mt-4">
        <div className="col-md-8">
   
        <SearchBar
        search={search}
        handleChange={onInputChange}
        handleSearch={handleSearch}
        />
         
        {error ? <InfoCard error={error}/>: <InfoCard error={"Please enter a book title to begin!"}/>}

            {books.map(book => (
        <ResultCard  
        id={book.id}
        title={book.volumeInfo.title}
        authors={book.volumeInfo.authors && book.volumeInfo.authors.length>1 ? book.volumeInfo.authors.join(", "): book.volumeInfo.authors}
        description={book.volumeInfo.description}
        image={book.volumeInfo.imageLinks.thumbnail}
        viewBtn={() => {window.location.href=book.volumeInfo.previewLink}}
        />
            ))}
        

        
        

        </div>
        </div>
        </div>
    )
}

export default Homepage
