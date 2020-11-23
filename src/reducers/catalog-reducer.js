import { getStateFromDB } from "../dataBase";

const { UPDATE_MODAL_ADDCARD_INPUT_TEXT } = require("./actions");

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
};

const catalogReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case UPDATE_MODAL_ADDCARD_INPUT_TEXT:
            newState.addCardModal[action.element] = action.newText;
            return newState;

        default:
            return state;
    }
};

export default catalogReducer;
