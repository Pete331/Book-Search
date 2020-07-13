import React from "react";

function SearchForm(props) {
  return (
    <form className="card-panel">
      <div className="form-group">
        <label htmlFor="language">Book Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          //   list="term"
          type="text"
          className="form-control"
          placeholder="What book would you like to find"
          id="term"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
