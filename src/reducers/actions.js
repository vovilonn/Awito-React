export const TOGGLE_MODAL_ADD_CARD_STATUS = "TOGGLE-MODAL-ADD-CARD-STATUS";

export const toggleModalAddCardStatus = (open) => {
    return {
        type: TOGGLE_MODAL_ADD_CARD_STATUS,
        isOpened: open,
    };
};
