import React from "react";

const OrdersPage = () => {
    return (
        <div className="modal modal__orders hide">
            <div className="basket__block">
                <h2 className="modal__header basket__modal-name">Заказы</h2>
                <button className="modal__close">&#10008;</button>
                <div className="orders__content">{/* contained JS */}</div>
            </div>
        </div>
    );
};

export default OrdersPage;
