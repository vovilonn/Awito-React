import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    makeStyles,
    TextField,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
    addNewCard,
    resetForm,
    toggleModalAddCardStatus,
    updateModalAddCardInputText,
} from "../../reducers/actions";

const useStyles = makeStyles((theme) => {
    return {
        input: {
            marginBottom: theme.spacing(1.5),
        },
    };
});

const ModalAddCard = ({
    isOpened,
    toggleModalStatus,
    currentCategory,
    updateCurrentCategory,
    categories,
    nameText,
    updateNameText,
    updateProductCondition,
    productCondition,
    productDescription,
    updateProductDescription,
    price,
    updateProductPrice,
    productImageSrc,
    changeProductImage,
    addNewCard,
    resetForm,
}) => {
    const classes = useStyles();

    const toggleModal = (isOpened) => () => {
        toggleModalStatus(isOpened);
        resetForm();
    };

    const onAddNewCard = () => {
        addNewCard();
        resetForm();
    };

    const changeCategory = (e) => {
        updateCurrentCategory(e.target.value);
    };

    return (
        <Dialog
            open={isOpened}
            onClose={toggleModal(false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                Добавление объявления
            </DialogTitle>
            <DialogContent>
                <div>
                    <img
                        className="modal__image modal__image-add"
                        src={productImageSrc}
                        alt="test"
                    />
                </div>
                <form className="modal__submit">
                    <label className="modal__file-label">
                        <span className="btn modal__file-btn">
                            Добавить фото
                        </span>
                        <input
                            className="modal__file-input"
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={changeProductImage}
                            required
                        />
                    </label>

                    <TextField
                        className={classes.input}
                        id="standard-select-currency"
                        select
                        label="Категория"
                        value={currentCategory}
                        onChange={changeCategory}
                        variant="outlined"
                        size="small"
                        required
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br />
                    <TextField
                        className={classes.input}
                        size="small"
                        name="nameItem"
                        id="outlined-basic"
                        label="Название"
                        variant="outlined"
                        value={nameText}
                        onChange={updateNameText}
                        required
                    />
                    <br />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Состояние</FormLabel>
                        <RadioGroup
                            aria-label="state"
                            name="gender1"
                            value={productCondition}
                            onChange={updateProductCondition}
                        >
                            <FormControlLabel
                                value="true"
                                control={<Radio />}
                                label="Новый"
                            />
                            <FormControlLabel
                                value="false"
                                control={<Radio />}
                                label="Б/У"
                            />
                        </RadioGroup>
                    </FormControl>

                    <br />

                    <TextField
                        className={classes.input}
                        label="Описание"
                        multiline
                        rows={4}
                        variant="outlined"
                        required
                        value={productDescription}
                        onChange={updateProductDescription}
                    />
                    <br />
                    <TextField
                        className={classes.input}
                        label="Цена"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={price}
                        onChange={updateProductPrice}
                    />
                    <div className="modal__btn-block">
                        <span className="modal__btn-warning">
                            Заполните все поля
                        </span>
                    </div>
                </form>
                <DialogActions>
                    <Button
                        onClick={toggleModal(false)}
                        variant="contained"
                        color="inherit"
                    >
                        Отмена
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onAddNewCard}
                    >
                        Добавить
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

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
        toggleModalStatus: (open) => dispatch(toggleModalAddCardStatus(open)),

        updateCurrentCategory: (category) =>
            dispatch(updateModalAddCardInputText("currentCategorie", category)),

        updateNameText: (e) =>
            dispatch(updateModalAddCardInputText("nameText", e.target.value)),

        updateProductCondition: (e) =>
            dispatch(updateModalAddCardInputText("isNew", e.target.value)),

        updateProductDescription: (e) =>
            dispatch(
                updateModalAddCardInputText("descriptionText", e.target.value)
            ),

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
                infoPhoto.base64 = btoa(e.target.result);
                console.log(e.target.result);
                console.log(infoPhoto.base64);
                const src = `data:image/jpeg;base64,${infoPhoto.base64}`;
                dispatch(updateModalAddCardInputText("productImage", src));
            });
        },
        addNewCard() {
            dispatch(addNewCard());
            dispatch(toggleModalAddCardStatus(false));
        },

        resetForm: () => dispatch(resetForm()),
    };
};

const ModalAddCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalAddCard);

export default ModalAddCardContainer;
