
import React from "react";
import "./Card.css";

const Card = ({ question, answer, difficulty, image, isFlipped, handleCardClick }) => {
  return (
    <div className={`Card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="CardContent">
        { !isFlipped && <div className="DifficultyLabel">{difficulty}</div> }
        { isFlipped && image && <div className="images"><img src={image} alt="Answer Image" style={{ width: '40%', height: '90%', objectFit: 'contain' }} /></div>}
        <p className={`CardText ${isFlipped ? 'flippedText' : ''}`}>
          {isFlipped ? answer : question}
        </p>
      </div>
    </div>
  );
}

export default Card;
