import { getStateFromDB } from "../dataBase";

const { UPDATE_MODAL_ADDCARD_INPUT_TEXT, ADD_NEW_CARD } = require("./actions");

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
            const category = state.addCardModal.categories.find((elem) => {
                if (elem.value === state.addCardModal.currentCategorie) {
                    return elem.label;
                }
                return false;
            });

            const card = {
                type: ADD_NEW_CARD,
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

        default:
            return state;
    }
};

export default catalogReducer;
