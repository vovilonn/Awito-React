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
    cards,
    addNewCard,
}) => {
    const classes = useStyles();

    const toggleModal = (isOpened) => () => {
        toggleModalStatus(isOpened);
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
                        onClick={addNewCard}
                    >
                        Добавить
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export default ModalAddCard;
