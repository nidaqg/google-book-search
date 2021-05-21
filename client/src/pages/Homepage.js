import React, {useState} from 'react';
import InfoCard from '../components/InfoCard';
import ResultCard from '../components/ResultCard';
import SearchBar from '../components/SearchBar';
import Apiroutes from '../utils/Apiroutes';
import './style.css';
import Wrapper from '../components/Wrapper/index';

function Homepage() {

const [search, setSearch] = useState('');
const [books, setBooks] = useState([]);



const onInputChange = (e) => {
    setSearch(e.target.value);
};


const handleSearch = (e) => {
e.preventDefault();

Apiroutes.googleSearch(search)
.then(res => {
    //if(!res.data.length) {
     //   setError("No results found, Please try again!");
    //} 
    setBooks(res.data.items)
    console.log(books);
    
    })
.catch(err => console.log(err))
}


const handleSave = (e, thisBook) => {

    console.log("save this: ", thisBook)

    Apiroutes.saveBook ({
        title: thisBook.volumeInfo.title,
        authors: thisBook.volumeInfo.authors,
        description: thisBook.volumeInfo.description,
        image: thisBook.volumeInfo.imageLinks.thumbnail,
        link: thisBook.volumeInfo.previewLink
    })
    .then(res => console.log("Success! ", res))
    .catch(err => console.log(err));
}


    return (
        <>
   <Wrapper>
        <SearchBar
        search={search}
        handleChange={onInputChange}
        handleSearch={handleSearch}
        />
         

            {books.length ? (books.map(book => (
        <ResultCard 
        book={book} 
        id={book.id}
        link={book.volumeInfo.previewLink}
        title={book.volumeInfo.title}
        authors={book.volumeInfo.authors && book.volumeInfo.authors.length>1 ? book.volumeInfo.authors.join(", "): book.volumeInfo.authors}
        description={book.volumeInfo.description}
        image={book.volumeInfo.imageLinks.thumbnail}
        viewBtn={() => {window.location.href=book.volumeInfo.previewLink}}
        secondBtn={"Save"}
        saveDelBtn={handleSave}
        />
            ))) : (<InfoCard error={"Enter book title to begin search!"}/>)}

  
  </Wrapper>
</> 
       
    )
}

export default Homepage;
