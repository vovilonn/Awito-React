import React from "react";

const Card = ({ id, nameItem, costItem, image }) => {
    let srcImg = "data:image/jpeg;base64," + image;
    srcImg = "./img/temp.jpg";

    return (
        <li className="card" key={id}>
            <img className="card__image" src={srcImg} alt="test" />
            <div className="card__description">
                <h3 className="card__header">{nameItem}</h3>
                <div className="card__price">{costItem} ₽</div>
            </div>
        </li>
    );
};

const Catalog = ({ cards }) => {
    console.log(cards);
    const cardsElements = cards.map((card, index) => 
         <Card key={index} nameItem={card.positionName} costItem={card.price} />);

    return <ul className="catalog">{cardsElements}</ul>;
};

export default Catalog;
