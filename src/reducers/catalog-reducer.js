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
    let newState = { ...state };
    newState.categories = { ...state.categories };
    switch (action.type) {
        case UPDATE_MODAL_ADDCARD_INPUT_TEXT:
            newState.addCardModal[action.element] = action.newText;
            return newState;

        case ADD_NEW_CARD:
            const category = newState.addCardModal.categories.find((elem) => {
                if (elem.value === newState.addCardModal.currentCategorie) {
                    return elem.label;
                }
                return false;
            });

            const card = {
                type: ADD_NEW_CARD,
                image: newState.addCardModal.productImage,
                positionName: newState.addCardModal.nameText,
                description: newState.addCardModal.descriptionText,
                isNew: newState.addCardModal.isNew,
                price: newState.addCardModal.price,
                category: category,
            };
            newState.cards.push(card);
            return newState;

        default:
            return state;
    }
};

export default catalogReducer;
