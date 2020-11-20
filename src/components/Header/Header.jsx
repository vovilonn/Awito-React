import React from "react";
import ModalAddCard from "./ModalAddCard/ModalAddCard";
import ModalBasket from "./ModalBasket/ModalBasket";

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <i className="fas fa-bars burger-menu"></i>
                        <div className="logo">
                            <a href="index.html">
                                <img src="img/logo.svg" alt="" />
                            </a>
                        </div>
                        <nav className="menu">
                            <ul className="menu__container">
                                <li className="menu__link">
                                    <a href="/" data-category="cloth">
                                        Одежда
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="/" data-category="foot">
                                        Обувь
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="/" data-category="toy">
                                        Игрушки
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="/" data-category="furniture">
                                        Мебель
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="/" data-category="tech">
                                        Техника
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <i className="fas fa-chevron-circle-down menu__open"></i>
                        <button className="btn add__ad">
                            Подать объявление
                        </button>
                        <i className="fas fa-plus add__ad plus"></i>
                        <i className="fas fa-shopping-basket basket"></i>
                        <i className="fas fa-user user"></i>
                    </div>
                    <div className="search">
                        <form className="search__form">
                            <label className="search__label">
                                <input
                                    className="search__input"
                                    type="search"
                                />
                            </label>
                        </form>
                    </div>
                </div>
            </header>
            <ModalAddCard />
            <ModalBasket/>
        </>
    );
};

export default Header;
