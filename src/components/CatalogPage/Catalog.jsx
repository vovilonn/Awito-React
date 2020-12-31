import React from "react";
import { connect } from "react-redux";
import { closeModalProduct, openProductModal } from "../../reducers/actions";

const Catalog = ({ cards, openProductModal }) => {
    return (
        <ul className="catalog">
            {cards.map((card, index) => {
                return (
                    <li
                        className="card"
                        key={index}
                        id={card.id}
                        onClick={() => {
                            openProductModal(card.id);
                        }}
                    >
                        <img
                            className="card__image"
                            src={card.image}
                            alt="test"
                        />
                        <div className="card__description">
                            <h3 className="card__header">
                                {card.positionName}
                            </h3>
                            <div className="card__price">{card.price} ₽</div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    cards: state.catalog.cards || [],
});

const mapDispatchToProps = (dispatch) => ({
    closeProductModal: () => dispatch(closeModalProduct()),
    openProductModal: (id) => dispatch(openProductModal(id)),
});

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
