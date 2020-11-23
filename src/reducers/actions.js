export const TOGGLE_MODAL_ADD_CARD_STATUS = "TOGGLE-MODAL-ADD-CARD-STATUS";
export const toggleModalAddCardStatus = (open) => {
    return {
        type: TOGGLE_MODAL_ADD_CARD_STATUS,
        isOpened: open,
    };
};

export const UPDATE_MODAL_ADDCARD_INPUT_TEXT =
    "UPDATE-MODAL-ADDCARD-INPUT-TEXT";
export const updateModalAddCardInputText = (element, text) => {
    return {
        type: UPDATE_MODAL_ADDCARD_INPUT_TEXT,
        element: element,
        newText: text,
    };
};

export const ADD_NEW_CARD = "ADD-NEW-CARD";
export const addNewCard = (
    image,
    name,
    description,
    category,
    isNew,
    price
) => {
    return {
        type: ADD_NEW_CARD,
        image: image,
        positionName: name,
        description: description,
        category: category,
        isNew: isNew,
        price: price,
    };
};
