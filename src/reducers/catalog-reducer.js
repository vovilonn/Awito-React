import { getStateFromDB } from "../dataBase";

const {
    UPDATE_MODAL_ADDCARD_INPUT_TEXT,
    ADD_NEW_CARD,
    RESET_FORM,
    CLOSE_PRODUCT_MODAL,
    OPEN_PRODUCT_MODAL,
} = require("./actions");

const initialState = getStateFromDB().catalog || {
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
                    currentPositionId: null,
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

        default:
            return state;
    }
};

export default catalogReducer;
