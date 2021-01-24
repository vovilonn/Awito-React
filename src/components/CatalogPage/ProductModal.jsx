import React from "react";
import { connect } from "react-redux";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@material-ui/core";
import { addPositionInBasket, closeProductModal } from "../../reducers/actions";

const ProductModal = ({
    isOpened,
    closeModal,
    currentPosition,
    addPositionInBasket,
}) => {
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
                    Категория:{" "}
                    <strong>{data.category ? data.category.label : ""}</strong>
                </p>
                <p>
                    Состояние:{" "}
                    <strong>{data.isNew === "true" ? "Новый" : "Б/У"}</strong>
                </p>

                <DialogActions>
                    <Button
                        onClick={closeModal}
                        variant="contained"
                        color="inherit"
                    >
                        Отмена
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            addPositionInBasket(data.id);
                            closeModal();
                        }}
                    >
                        Добавить
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

const mapStateToProps = (state) => ({
    isOpened: state.catalog.productModal.isOpened,
    currentPosition: state.catalog.cards.find(
        (e) => e.id === state.catalog.productModal.currentPositionId
    ),
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeProductModal()),
    addPositionInBasket: (positionId) => {
        dispatch(addPositionInBasket(positionId));
    },
});

const ProductModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductModal);
export default ProductModalContainer;
