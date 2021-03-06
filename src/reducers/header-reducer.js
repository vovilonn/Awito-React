import { getStateFromLS } from "../localStorage";
import { TOGGLE_MODAL_ADD_CARD_STATUS } from "./actions";

const initialState = getStateFromLS().header || {
    modalAddCardIsOpened: false,
};

const headerReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case TOGGLE_MODAL_ADD_CARD_STATUS:
            newState.modalAddCardIsOpened = action.isOpened;
            return newState;

        default:
            return newState;
    }
};

export default headerReducer;
