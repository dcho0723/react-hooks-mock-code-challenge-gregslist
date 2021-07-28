import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({onSearch}) {
  const [cardData, setCardData] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => setCardData(data))
  }, [])

  function handleDelete(id) {
    setCardData(cardData.filter( (card) => card.id !== id))
    //will delete stuff in backend
    // fetch('http://localhost:6001/listings/' + id, {
    //   method:'DELETE'
    // })
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  }

  let cardsToDisplay = cardData.filter( (card) => card.description.toLowerCase().includes(onSearch.toLowerCase()))
  console.log(cardsToDisplay)

  const cards = cardsToDisplay.map((card) => 
   <ListingCard 
   key = {card.id}
   description = {card.description}
   image ={card.image}
   location = {card.location}
   id = {card.id}
   handleDelete= {handleDelete}
  />
)
  

  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
  
}

export default ListingsContainer;
