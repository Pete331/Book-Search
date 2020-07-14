import React from "react";

function BookListItem(props) {
  return (
    <div className="card-panel">
      <div className="row">
        <div className="col s9">
          <p>{props.title}</p>
          <p>{props.authors.join(", ")}</p>
        </div>
        <div className="col s3">
          <a className="btn" target="_blank" href={props.href}>
            View
          </a>
          <button className="btn" onClick={props.handleSaveClick} id={props.id}>Save</button>
        </div>
      </div>
      <div className="row">
        <div className="col s3">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="col s9">{props.description}</div>
      </div>
    </div>
  );
}

export default BookListItem;
