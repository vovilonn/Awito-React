import React from "react";
import { connect } from "react-redux";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    makeStyles,
} from "@material-ui/core";
import { toggleBasketModal } from "../../reducers/actions";

const useStyles = makeStyles((theme) => ({
    basketElement: {
        marginBottom: theme.spacing(1.5),
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        paddingRight: theme.spacing(1.5),
        paddingLeft: theme.spacing(1.5),
        border: "1px solid silver",
        height: "60px",
        width: "320px",
    },
}));

const ModalBasket = ({ isOpened, toggleModal }) => {
    const s = useStyles();

    return (
        <Dialog
            open={isOpened}
            onClose={toggleModal.bind(null, false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Корзина</DialogTitle>
            <DialogContent>
                <Box element="div" display="block" className={s.basketElement}>
                    elem
                </Box>
                <Box element="div" display="block" className={s.basketElement}>
                    elem
                </Box>
                <Box element="div" display="block" className={s.basketElement}>
                    elem
                </Box>
                <Box element="div" display="block" className={s.basketElement}>
                    elem
                </Box>

                <DialogActions>
                    <Button
                        onClick={toggleModal.bind(null, false)}
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
};

const mapStateToProps = ({ catalog }) => ({
    isOpened: catalog.basket.isModalOpened,
    basketPositions: catalog.basket.positions,
});
const mapDispatchToProps = (dispatch) => ({
    toggleModal: (isOpened) => dispatch(toggleBasketModal(isOpened)),
});

const ModalBasketContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalBasket);

export default ModalBasketContainer;
