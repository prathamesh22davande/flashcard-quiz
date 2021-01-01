import React from "react";
import FlashCard from "./FlashCard";

function FlashCardList({ flashCards }) {
  let i = 1;
  return (
    <div className="container-fluid row container">
      {flashCards.map((flashCard) => {
        return <FlashCard flashCard={flashCard} key={flashCard.id} no={i++} />;
      })}
    </div>
  );
}

export default FlashCardList;
