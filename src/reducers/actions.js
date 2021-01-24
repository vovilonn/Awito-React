export const TOGGLE_MODAL_ADD_CARD_STATUS = "TOGGLE-MODAL-ADD-CARD-STATUS";
export const toggleModalAddCardStatus = (status) => {
    return {
        type: TOGGLE_MODAL_ADD_CARD_STATUS,
        isOpened: status,
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

export const RESET_FORM = "RESET-FORM";
export const resetForm = () => ({
    type: RESET_FORM,
});

export const CLOSE_PRODUCT_MODAL = "TOGGLE-MODAL-PRODUCT";
export const closeProductModal = (isOpened) => ({
    type: CLOSE_PRODUCT_MODAL,
    isOpened: isOpened,
});

export const OPEN_PRODUCT_MODAL = "OPEN-PRODUCT-MODAL";
export const openProductModal = (productId) => ({
    type: OPEN_PRODUCT_MODAL,
    productId: productId,
});

export const TOGGLE_BASKET_MODAL = "OPEN_BASKET_MODAL";
export const toggleBasketModal = (isOpened) => ({
    type: TOGGLE_BASKET_MODAL,
    isOpened: isOpened,
});

export const ADD_POSITION_IN_BASKET = "ADD-POSITION-IN-BASKET";
export const addPositionInBasket = (positionId) => ({
    type: ADD_POSITION_IN_BASKET,
    positionId: positionId,
});
