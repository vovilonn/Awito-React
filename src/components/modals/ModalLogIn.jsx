import React from "react";

const ModalLogIn = () => {
    return (
        <div className="modal modal_sign-in hide">
            <div className="sign-in__block">
                <button className="modal__close">&#10008;</button>
                <div className="sign-in__content">
                    <h2 className="sign-in__title">Войти</h2>
                    <form className="sign-in__form login__form">
                        <input
                            type="email"
                            className="sign-in__login sign_in_login"
                            placeholder="Введите логин"
                        />
                        <input
                            type="password"
                            className="sign-in__password sign_in_password"
                            placeholder="Введите пароль"
                        />
                        <input
                            type="button"
                            value="Войти"
                            className="sign-in__button"
                        />
                    </form>
                    <a href="/" className="reg_log sign-in__register">
                        Зарегестрироваться
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalLogIn;
