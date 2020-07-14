import React, { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm";
import BookResults from "../../components/BookResults";
import API from "../../utils/API";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");
  const [formObject, setFormObject] = useState({
    title: "",
    author: "",
    synopsis: "",
  });

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    console.log(value);
    setBookSearch(value);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(bookSearch)
      .then((res) => {
        console.log(res.data.items);
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  };

  const handleSaveClick = (event)=>{
    console.log(event.target.id);
  }

  // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadBooks();
  // }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <SearchForm
        name="bookSearch"
        value={bookSearch}
        handleInputChange={handleInputChange}
        placeholder="Search For a Book"
        handleFormSubmit={handleFormSubmit}
      />
      {books.length ? <BookResults books={books} handleSaveClick={handleSaveClick} /> : ""}
    </div>
  );
}

export default Books;
