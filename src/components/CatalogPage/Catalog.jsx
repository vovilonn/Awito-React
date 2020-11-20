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

const Catalog = () => {
    return (
        <ul className="catalog">
            <Card id={1} nameItem={"Anigilator"} costItem={30000} />
            <Card id={1} nameItem={"Anigilator"} costItem={30000} />
            <Card id={1} nameItem={"Anigilator"} costItem={30000} />
            <Card id={1} nameItem={"Anigilator"} costItem={30000} />
            <Card id={1} nameItem={"Anigilator"} costItem={30000} />
            <Card id={1} nameItem={"Anigilator"} costItem={30000} />
            <Card id={1} nameItem={"Anigilator"} costItem={30000} />
            <Card id={1} nameItem={"Anigilator"} costItem={30000} />
        </ul>
    );
};

export default Catalog;
