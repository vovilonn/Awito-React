import React from "react";

const ModalBasket = () => {
    return (
        <div className="modal modal__basket hide">
            <div className="basket__block">
                <h2 className="modal__header basket__modal-name">Корзина</h2>
                <button className="modal__close">&#10008;</button>
                <div className="basket__content">{/* contained JS */}</div>
            </div>
        </div>
    );
};

export default ModalBasket;
