import Header from "./Header";
import { connect } from "react-redux";
import { toggleModalAddCardStatus } from "../../reducers/actions";

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalStatus: (open) => {
            debugger;
            dispatch(toggleModalAddCardStatus(open));
        },
    };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
