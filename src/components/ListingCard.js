import React, { useState } from "react";

function ListingCard({ description, image, location, handleDelete, id}) {
  const [clickBtn, setClickBtn] = useState(false)

  function handleClick() {
    setClickBtn(!clickBtn)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className ={clickBtn ? "emoji-button favorite active" : "emoji-button favorite"} onClick={handleClick}>{clickBtn ? "★" : "☆"}</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
