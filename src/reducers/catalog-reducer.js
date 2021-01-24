import { getStateFromLS } from "../localStorage";

const {
    UPDATE_MODAL_ADDCARD_INPUT_TEXT,
    ADD_NEW_CARD,
    RESET_FORM,
    CLOSE_PRODUCT_MODAL,
    OPEN_PRODUCT_MODAL,
    TOGGLE_BASKET_MODAL,
    ADD_POSITION_IN_BASKET,
} = require("./actions");

const initialState = getStateFromLS().catalog || {
    addCardModal: {
        categories: [
            {
                value: "toy",
                label: "Игрушки",
            },
            {
                value: "furniture",
                label: "Мебель",
            },
            {
                value: "foot",
                label: "Обувь",
            },
            {
                value: "cloth",
                label: "Одежда",
            },
            {
                value: "tech",
                label: "Техника",
            },
        ],

        currentCategorie: "tech",
        nameText: "",
        isNew: true,
        descriptionText: "",
        price: 0,
        productImage: "img/temp.jpg",
        imageFile: null,
    },
    productModal: {
        isOpened: false,
        currentPositionId: null,
    },
    basket: {
        isModalOpened: false,
        positions: [],
    },
    cards: [],
};

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MODAL_ADDCARD_INPUT_TEXT:
            return {
                ...state,
                addCardModal: {
                    ...state.addCardModal,
                    [action.element]: action.newText,
                },
            };

        case ADD_NEW_CARD:
            const category = state.addCardModal.categories.find((categorie) => {
                if (categorie.value === state.addCardModal.currentCategorie) {
                    return categorie.label;
                }
                return false;
            });

            const id = state.cards.length + 1;

            const card = {
                type: ADD_NEW_CARD,
                id: id,
                image: state.addCardModal.productImage,
                positionName: state.addCardModal.nameText,
                description: state.addCardModal.descriptionText,
                isNew: state.addCardModal.isNew,
                price: state.addCardModal.price,
                category: category,
            };

            return {
                ...state,
                cards: [...state.cards, card],
            };

        case RESET_FORM:
            return {
                ...state,
                addCardModal: {
                    ...state.addCardModal,
                    currentCategorie: "tech",
                    nameText: "",
                    isNew: true,
                    descriptionText: "",
                    price: 0,
                    productImage: "img/temp.jpg",
                },
            };

        case CLOSE_PRODUCT_MODAL: {
            return {
                ...state,
                productModal: {
                    ...state.productModal,
                    isOpened: false,
                },
            };
        }

        case OPEN_PRODUCT_MODAL: {
            return {
                ...state,
                productModal: {
                    ...state.productModal,
                    currentPositionId: action.productId,
                    isOpened: true,
                },
            };
        }

        case TOGGLE_BASKET_MODAL: {
            return {
                ...state,
                basket: {
                    ...state.basket,
                    isModalOpened: action.isOpened,
                },
            };
        }

        case ADD_POSITION_IN_BASKET: {
            const targetItem = state.cards.find(
                (e) => e.id === action.positionId
            );

            return {
                ...state,
                basket: {
                    ...state.basket,
                    positions: {
                        ...state.basket.positions,
                        targetItem,
                    },
                },
            };
        }

        default:
            return state;
    }
};

export default catalogReducer;
