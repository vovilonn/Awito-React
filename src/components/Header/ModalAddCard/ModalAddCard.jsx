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

const ModalAddCard = ({ isOpened, toggleModalStatus }) => {
    const classes = useStyles();

    const categories = [
        {
            value: "toy",
            label: "Игрушки",
        },
        {
            value: "furniture",
            label: "Мебель",
        },
        {
            value: "foot",
            label: "Обувь",
        },
        {
            value: "cloth",
            label: "Одежда",
        },
        {
            value: "tech",
            label: "Техника",
        },
    ];

    const [currency, setCurrency] = React.useState("EUR");

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [value, setValue] = React.useState("female");

    const handleRadio = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            open={isOpened}
            onClose={toggleModalStatus(false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                Добавление объявления
            </DialogTitle>
            <DialogContent>
                <div>
                    <img
                        className="modal__image modal__image-add"
                        src="img/temp.jpg"
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
                            required
                        />
                    </label>

                    <TextField
                        className={classes.input}
                        id="standard-select-currency"
                        select
                        label="Категория"
                        value={currency}
                        onChange={handleChange}
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
                        required
                    />
                    <br />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Состояние</FormLabel>
                        <RadioGroup
                            aria-label="state"
                            name="gender1"
                            value={value}
                            onChange={handleRadio}
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
                    />
                    <div className="modal__btn-block">
                        <span className="modal__btn-warning">
                            Заполните все поля
                        </span>
                    </div>
                </form>
                <DialogActions>
                    <Button
                        onClick={toggleModalStatus(false)}
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

export default ModalAddCard;
