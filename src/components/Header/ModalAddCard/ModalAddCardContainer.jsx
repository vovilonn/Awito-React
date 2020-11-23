import ModalAddCard from "./ModalAddCard";
import { connect } from "react-redux";
import {
    addNewCard,
    toggleModalAddCardStatus,
    updateModalAddCardInputText,
} from "../../../reducers/actions";

const mapStateToProps = (state) => {
    return {
        isOpened: state.header.modalAddCardIsOpened,
        currentCategory: state.catalog.addCardModal.currentCategorie,
        categories: state.catalog.addCardModal.categories,
        nameText: state.catalog.addCardModal.nameText,
        productCondition: state.catalog.addCardModal.isNew,
        productDescription: state.catalog.addCardModal.descriptionText,
        price: state.catalog.addCardModal.price,
        productImageSrc: state.catalog.addCardModal.productImage,
        cards: state.catalog.cards,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalStatus(open) {
            dispatch(toggleModalAddCardStatus(open));
        },
        updateCurrentCategory(category) {
            dispatch(updateModalAddCardInputText("currentCategorie", category));
        },
        updateNameText(e) {
            dispatch(updateModalAddCardInputText("nameText", e.target.value));
        },
        updateProductCondition(e) {
            dispatch(updateModalAddCardInputText("isNew", e.target.value));
        },
        updateProductDescription(e) {
            dispatch(
                updateModalAddCardInputText("descriptionText", e.target.value)
            );
        },
        updateProductPrice(e) {
            if (+e.target.value >= 0) {
                dispatch(updateModalAddCardInputText("price", e.target.value));
            }
        },
        changeProductImage(e) {
            let infoPhoto = {};
            const target = e.target;
            const reader = new FileReader();
            const file = target.files[0];

            dispatch(updateModalAddCardInputText("imageFile", file));

            infoPhoto.filename = file.name;
            infoPhoto.size = file.size;
            reader.readAsBinaryString(file);

            reader.addEventListener("load", (e) => {
                // infoPhoto.base64 = btoa(e.target.result);
                // console.log(e.target.result);
                // console.log(infoPhoto.base64);
                // const src = `data:image/jpeg;base64,${infoPhoto.base64}`;
                dispatch(updateModalAddCardInputText("productImage", "src"));
            });
        },
        addNewCard() {
            dispatch(addNewCard());
            dispatch(toggleModalAddCardStatus(false));
        },
    };
};

const ModalAddCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalAddCard);

export default ModalAddCardContainer;
