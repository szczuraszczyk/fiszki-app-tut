import { useState } from 'react';
import './Flashcard.css';

function Flashcard({ question, answer}){

        const [isFlipped, setIsFlipped] = useState(false);
        const [click, setClicks] = useState(0);

        function handleFlip(){
            console.log("ustawiam isFlipped na " + !isFlipped);
            setIsFlipped(!isFlipped);
            setClicks(click + 1)
        }


    return (
        <div className="flashcard">
{/* najpierw prawda potem falsz */}
            <p>clicks: {click}</p>
            {isFlipped ? <h3>{answer}</h3> : <h3>{question}</h3>}
            <button onClick={handleFlip}>odwróć kartę</button>
        </div>
    )

}

export default Flashcard