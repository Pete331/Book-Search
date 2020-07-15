import React from "react";

function SearchForm(props) {
  return (
    <form className="card-panel">
      <div className="form-group">
        <label htmlFor="language">Book Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name={props.name}
          type="text"
          className="form-control"
          placeholder={props.placeholder}
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;