import React, {useState} from 'react';
import ResultCard from '../components/ResultCard';
import SearchBar from '../components/SearchBar';
import Apiroutes from '../utils/Apiroutes';
import './style.css';

function Homepage() {

const [search, setSearch] = useState('');
const [books, setBooks] = useState([]);



const onInputChange = (e) => {
    setSearch(e.target.value);
};

const handleSearch = (e) => {
e.preventDefault();
if(!search) {
    return;
}
Apiroutes.googleSearch(search)
.then(res => {
    if(res.data.length === 0) {
        throw new Error("No results found!");
    }
    setBooks(res.data.items)
    console.log(books);
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
