export const TOGGLE_MODAL_ADD_CARD_STATUS = "TOGGLE-MODAL-ADD-CARD-STATUS";
export const toggleModalAddCardStatus = (open) => {
    return {
        type: TOGGLE_MODAL_ADD_CARD_STATUS,
        isOpened: open,
    };
};

export const UPDATE_MODAL_ADDCARD_INPUT_TEXT =
    "UPDATE-MODAL-ADDCARD-INPUT-TEXT";
export const toggleModalAddCardInputText = (element, text) => {
    return {
        type: UPDATE_MODAL_ADDCARD_INPUT_TEXT,
        element: element,
        newText: text,
    };
};
