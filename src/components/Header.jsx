import React from "react";
import Badge from "@material-ui/core/Badge";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { connect } from "react-redux";
import { toggleModalAddCardStatus } from "../reducers/actions";

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}))(Badge);

const useStyles = makeStyles((theme) => {
    return {
        basketIcon: {
            color: "#006cf0",
            marginBottom: theme.spacing(2),
            marginLeft: theme.spacing(1),
        },
        userIcon: {
            color: "#006cf0",
            marginBottom: theme.spacing(1.5),
            marginLeft: theme.spacing(1),
        },
    };
});

const BasketIcon = ({ amount }) => {
    const classes = useStyles();
    return (
        <IconButton aria-label="cart" className={classes.basketIcon}>
            <StyledBadge badgeContent={amount} color="secondary">
                <ShoppingCartIcon style={{ fontSize: 30 }} />
            </StyledBadge>
        </IconButton>
    );
};

const Header = ({ toggleModalStatus }) => {
    const classes = useStyles();

    const toggleModal = (isOpened) => () => {
        toggleModalStatus(isOpened);
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <i className="fas fa-bars burger-menu"></i>
                        <div className="logo">
                            <a href="index.html">
                                <img src="img/logo.svg" alt="" />
                            </a>
                        </div>
                        <nav className="menu">
                            <ul className="menu__container">
                                <li className="menu__link">
                                    <a href="/" data-category="cloth">
                                        Одежда
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="/" data-category="foot">
                                        Обувь
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="/" data-category="toy">
                                        Игрушки
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="/" data-category="furniture">
                                        Мебель
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="/" data-category="tech">
                                        Техника
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <i className="fas fa-chevron-circle-down menu__open"></i>
                        <button
                            className="btn add__ad"
                            onClick={toggleModal(true)}
                        >
                            Подать объявление
                        </button>
                        <i className="fas fa-plus add__ad plus"></i>
                        <BasketIcon amount={4} />
                        <IconButton
                            aria-label="cart"
                            className={classes.userIcon}
                        >
                            <StyledBadge color="secondary">
                                <AccountBoxIcon style={{ fontSize: 32 }} />
                            </StyledBadge>
                        </IconButton>
                    </div>
                    <div className="search">
                        <form className="search__form">
                            <label className="search__label">
                                <input
                                    className="search__input"
                                    type="search"
                                />
                            </label>
                        </form>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalStatus: (open) => {
            dispatch(toggleModalAddCardStatus(open));
        },
    };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
