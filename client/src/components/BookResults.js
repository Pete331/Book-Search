import React from "react";
import BookListItem from "./BookListItem";

function BookResults({ books, handleSaveClick }) {
  return (
    <div className="card-panel">
      <p>Results</p>

      {books.length ? (
        books.map((book) => {
          return (
            <BookListItem
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              href={book.volumeInfo.infoLink}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.thumbnail}
              key={book.id}
              id={book.id}
              handleSaveClick={handleSaveClick}
            />
          );
        })
      ) : (
        <BookListItem ingredients="Nothing Here" />
      )}
    </div>
  );
}

export default BookResults;
