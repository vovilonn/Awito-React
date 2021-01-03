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
    const data = currentPosition ? currentPosition : {};
    return (
        <Dialog
            open={isOpened}
            onClose={closeModal}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                {data.positionName}
            </DialogTitle>
            <DialogContent>
                <div>
                    <img
                        className="modal__image modal__image-add"
                        src={data.image}
                        alt="test"
                    />
                </div>
                <p>{data.description}</p>
                <strong>{data.price} ₽</strong>
                <p>
                    Категория: <strong>{data.category.label}</strong>
                </p>
                <p>
                    Состояние: <strong>{data.isNew ? "Новый" : "Б/У"}</strong>
                </p>

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

const mapStateToProps = (state) => ({
    isOpened: state.catalog.productModal.isOpened,
    currentPosition: state.catalog.cards.find(
        (e) => e.id === state.catalog.productModal.currentPositionId
    ),
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModalProduct()),
});

const ProductModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductModal);
export default ProductModalContainer;
