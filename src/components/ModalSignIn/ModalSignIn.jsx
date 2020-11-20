import React from "react";

const ModalSignIn = () => {
    return (
        <div className="modal modal_register hide">
            <div className="sign-in__block">
                <button className="modal__close">&#10008;</button>
                <div className="sign-in__content">
                    <h2 className="sign-in__title">Зарегестрироваться</h2>
                    <form className="sign-in__form login__form">
                        <input
                            type="email"
                            className="sign-in__login sign_up_login"
                            placeholder="Введите логин"
                        />
                        <input
                            type="password"
                            className="sign-in__password sign_up_password"
                            placeholder="Введите пароль"
                        />
                        <div className="sign-in__checkbox">
                            {" "}
                            Я принимаю условия пользования
                        </div>
                        <input
                            type="button"
                            value="Зарегестрироваться"
                            className="sign-in__button"
                        />
                    </form>
                    <a href="/" className="reg_log sign-in__logIn">
                        Войти
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalSignIn;
