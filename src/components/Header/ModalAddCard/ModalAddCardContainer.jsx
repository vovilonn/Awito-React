import ModalAddCard from "./ModalAddCard";
import { connect } from "react-redux";
import { toggleModalAddCardStatus } from "../../../reducers/actions";

const mapStateToProps = (state) => {
    return {
        isOpened: state.header.modalAddCardIsOpened,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalStatus: (open) => {
            dispatch(toggleModalAddCardStatus(open));
        },
    };
};

const ModalAddCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalAddCard);

export default ModalAddCardContainer;
