// Card.jsx
import React, { useState } from "react";
import "./Card.css";

const Card = ({ question, answer, difficulty, image }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`Card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="CardContent">
        { !isFlipped && <div className="DifficultyLabel">{difficulty}</div> }
        { isFlipped && image && <div className="images"><img src={image} alt="Answer Image" /></div>}
        <p className={`CardText ${isFlipped ? 'flippedText' : ''}`}>
          {isFlipped ? answer : question}
        </p>
      </div>
    </div>
  );
}

export default Card;
