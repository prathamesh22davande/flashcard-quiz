import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function FlashCard({ flashCard, no }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className="shadow p-3 border-dark rounded bg-warning col-sm-3 col-md-6 col-lg-4 col-xl-4 p-3 m-2"
      onClick={() => setFlip(!flip)}
    >
      {/* {flip ? flashCard.answer : flashCard.question} */}
      <ReactCardFlip isFlipped={flip}>
        <div>
          <h5 className="text-dark text-center">
            {no + ") " + flashCard.question}
          </h5>
          <div>
            {flashCard.options.map((option) => {
              return <p className="text-dark pl-4">{option}</p>;
            })}
          </div>
        </div>
        <div>
          <h5 className="text-center">Answer</h5>
          {flashCard.answer}
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default FlashCard;
