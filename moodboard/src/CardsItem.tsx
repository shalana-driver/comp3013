
interface Props {
    id: number
    imgURL: string
    onMove: (id: number, direction: string) => void;
}

function CardsItem ({id, imgURL, onMove}: Props) {
    const handleMove = (direction: string) => {
        onMove(id, direction);
      };
    return (

        <div className="cards_item"> 
            <div className="card">
                    <div className="card_image">
                        <img src={imgURL}></img>
                    </div>
                    <div className="card_content">
                        <button className="left" onClick={() => handleMove('left')}>left</button>
                        <button className="right" onClick={() => handleMove('right')}>right</button>
                    </div>
                </div>
        </div> 
    )
}

export default CardsItem