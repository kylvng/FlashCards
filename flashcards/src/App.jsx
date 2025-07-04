import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import m from './images/letterM.png';
import pencil from './images/pencilLead.png';
import keyboard from './images/keyboard.png';
import footsteps from './images/footsteps.png';
import ton from './images/theWordTon.png';
import echo from './images/echo.png';
import map from './images/map.png';
import future from './images/future.png';
import fire from './images/fire.png';
import coffin from './images/coffin.png';

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [borderColor, setBorderColor] = useState('black');
  const [cardPairs, setCardPairs] = useState([
    { question: 'click me', answer: 'click next ⬇️', difficulty: 'no me', image: null },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "M", difficulty: "easy", image: m },
    { question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?", answer: "Pencil lead", difficulty: "easy", image: pencil },
    { question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?", answer: "Keyboard", difficulty: "easy", image: keyboard },
    { question: "The more you take, the more you leave behind. What am I?", answer: "Footsteps", difficulty: "easy", image: footsteps },
    { question: "Forward I am heavy, but backward I am not. What am I?", answer: "Ton", difficulty: "medium", image: ton },
    { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "Echo", difficulty: "medium", image: echo },
    { question: "What has cities, but no houses; forests, but no trees; and water, but no fish?", answer: "Map", difficulty: "medium", image: map },
    { question: "I am always in front of you but can't be seen. What am I?", answer: "Future", difficulty: "medium", image: future },
    { question: "I am not alive, but I can grow. I don't have lungs, but I need air. What am I?", answer: "Fire", difficulty: "hard", image: fire },
    { question: "The person who makes it, sells it. The person who buys it never uses it. The person who uses it never knows they're using it. What is it?", answer: "Coffin", difficulty: "hard", image: coffin }
  ]);
  const len = cardPairs.length;

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  const handleChangeCard = () => {
    setUserGuess("");
    setBorderColor('black');
  }

  const handlePrevCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setFlipped(false);
      handleChangeCard();
    }
  };

  const handleNextCard = () => {
    if (cardIndex < len - 1) {
      setCardIndex(cardIndex + 1);
      setFlipped(false);
      handleChangeCard();
    }
  };

  const handleShuffle = () => {
    const shuffledPairs = [...cardPairs].sort(() => Math.random() - 0.5);
    setCardPairs(shuffledPairs);
    handleChangeCard();
  };

  const handleSubmit = () => {
    const correctAnswer = cardPairs[cardIndex].answer;
    if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
      setBorderColor('green');
    } else {
      setBorderColor('red');
    }
  };

  return (
    <div className='App'>
      <div className='textContainer'>
        <h1>Are You Smarter Than a 5th Grader?</h1>
        <h5 className='seriously'>... are you?</h5>
        <h1 style={{ fontSize: '1.85rem' }}>
          Take This <span style={{ fontSize: '1.25rem', fontFamily: 'Inter', fontStyle: 'italic' }}>Simple</span> Quiz and Find Out!
        </h1>

        <h2 className='cardCount'>Number of Questions: {len - 1}</h2>
        <Card
          answer={cardPairs[cardIndex].answer}
          question={cardPairs[cardIndex].question}
          difficulty={cardPairs[cardIndex].difficulty}
          image={cardPairs[cardIndex].image}
          isFlipped={isFlipped}
          handleCardClick={handleCardClick}
        />
        <input
          type='text'
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder='Enter your guess...'
          style={{ borderColor: borderColor, borderWidth: '4px', borderStyle: 'solid' }}
        />
        <button onClick={handleSubmit}>Submit Guess</button>

        <div className='buttonRow'>
          <button onClick={handlePrevCard}>Back</button>
          <button onClick={handleNextCard}>Next</button>
          <button onClick={handleShuffle}>Shuffle 🔀</button>
        </div>

      </div>
    </div>
  );
}

export default App;
