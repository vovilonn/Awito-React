import { connect } from "react-redux";
import Catalog from "./Catalog";

const mapStateToProps = (state) => {
    return {
        cards: state.catalog.cards || [],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
