const { UPDATE_MODAL_ADDCARD_INPUT_TEXT } = require("./actions");

const initialState = {
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
    },
};

const catalogReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case UPDATE_MODAL_ADDCARD_INPUT_TEXT:
            newState.addCardModal[action.element] = action.text;
            return newState;

        default:
            return state;
    }
};

export default catalogReducer;
