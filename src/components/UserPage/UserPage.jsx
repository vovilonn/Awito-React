import React from "react";

const UserPage = () => {
    return (
        <div className="modal modal_userInfo hide">
            <div className="sign-in__block">
                <button className="modal__close">&#10008;</button>
                <div className="sign-in__content">
                    <h2 className="sign-in__title">Информация</h2>
                    <h3 className="user-info__login">
                        <b>Логин:</b> admin
                    </h3>
                    <div className="user-info__basket">
                        <div className="fas fa-shopping-basket basket"></div>
                        <p className="user-info__basket-text">
                            Вещей в корзине:
                        </p>
                        <b>-</b>
                    </div>
                    <div className="user-info__orders">
                        <div className="fas fa-briefcase orders"></div>
                        <p className="user-info__orders-text">Заказов:</p>
                        <b>-</b>
                    </div>
                    <a href="/" className="sign-in__logIn sign_out">
                        Выйти
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
