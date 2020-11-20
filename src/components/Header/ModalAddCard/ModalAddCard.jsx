import React from "react";

const ModalAddCard = () => {
    return (
        <div className="modal modal__add hide">
            <div className="modal__block">
                <h2 className="modal__header">Подать Объявление</h2>
                <div className="modal__content">
                    <div>
                        <img
                            className="modal__image modal__image-add"
                            src="img/temp.jpg"
                            alt="test"
                        />
                    </div>
                    <form className="modal__submit">
                        <label className="modal__file-label">
                            <span className="btn modal__file-btn">
                                Добавить фото
                            </span>
                            <input
                                className="modal__file-input"
                                type="file"
                                name="image"
                                accept="image/*"
                                required
                            />
                        </label>

                        <label>
                            <span>Категория:</span>
                            <select name="category">
                                <option value="toy">Игрушки</option>
                                <option value="furniture">Мебель</option>
                                <option value="foot">Обувь</option>
                                <option value="cloth">Одежда</option>
                                <option value="tech">Техника</option>
                            </select>
                        </label>

                        <label>
                            <span>Название:</span>
                            <input name="nameItem" type="text" required />
                        </label>

                        <label>
                            <span>Состояние:</span>
                            <select name="status">
                                <option value="old">Б/у</option>
                                <option value="new">Новый</option>
                            </select>
                        </label>

                        <label>
                            <span>Описание:</span>
                            <textarea
                                name="descriptionItem"
                                maxLength="3000"
                                required
                            ></textarea>
                        </label>

                        <label>
                            <span>Цена:</span>
                            <input name="costItem" type="number" required />
                        </label>
                        <div className="modal__btn-block">
                            <span className="modal__btn-warning">
                                Заполните все поля
                            </span>
                            <button className="btn modal__btn-submit">
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
                <button className="modal__close">&#10008;</button>
            </div>
        </div>
    );
};

export default ModalAddCard;
