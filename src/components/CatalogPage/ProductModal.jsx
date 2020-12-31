import React from "react";
import { connect } from "react-redux";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@material-ui/core";
import { closeModalProduct } from "../../reducers/actions";
function ProductModal({ isOpened, closeModal, currentPosition }) {
    return (
        <Dialog
            open={isOpened}
            onClose={closeModal}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Добавить в корзину</DialogTitle>
            <DialogContent>
                <div>
                    <img
                        className="modal__image modal__image-add"
                        // src={currentPosition.image}
                        alt="test"
                    />
                </div>

                <DialogActions>
                    <Button
                        onClick={closeModal}
                        variant="contained"
                        color="inherit"
                    >
                        Отмена
                    </Button>
                    <Button variant="contained" color="secondary">
                        Добавить
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}

const mapStateToProps = (state) => {
    return {
        isOpened: state.catalog.productModal.isOpened,
        currentPosition: state.catalog.cards.find(
            (e) => e.id === state.catalog.productModal.currentPositionId
        ),
    };
};
const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModalProduct()),
});

const ProductModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductModal);
export default ProductModalContainer;
