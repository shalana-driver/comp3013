import { useState } from "react";
import CardsItem from "./CardsItem";

function Cards () {

    const [cards, setCards] = useState(() => {
        const numOfCards = 10;
        const cardsList = [];
        for (let i = 1; i <= numOfCards; i++) {
            cardsList.push({id:i,imgURL:`https://picsum.photos/300?sig=${i}`});
          }
          return cardsList;
    })

    const handleMove = (id:number,direction:string) => {
        const index = cards.findIndex((card) => card.id === id);
        const lastIndex = cards.length - 1;

        if (direction === 'left' && index > 0) {
        const updatedCards = [...cards];
        [updatedCards[index], updatedCards[index - 1]] = [
            updatedCards[index - 1],
            updatedCards[index],
        ];
        setCards(updatedCards);
        } else if (direction === 'right' && index < lastIndex) {
        const updatedCards = [...cards];
        [updatedCards[index], updatedCards[index + 1]] = [
            updatedCards[index + 1],
            updatedCards[index],
        ];
        setCards(updatedCards);
        }
    }
    return (
        <div className="main" >
            <div className="cards">
                {cards.map((card) => (
                <CardsItem 
                key={card.id}
                id={card.id} 
                imgURL={card.imgURL}
                onMove={handleMove}
                />))}
            </div>
        </div>
    )
}

export default Cards;