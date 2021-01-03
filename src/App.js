import React from "react";
import "./style.css";
import Header from "./components/Header";
import Catalog from "./components/CatalogPage/Catalog";
import UserPage from "./components/UserPage/UserPage";
import OrdersPage from "./components/OrdersPage/OrdersPage";
import ProductModal from "./components/CatalogPage/ProductModal";
import ModalAddCard from "./components/modals/ModalAddCard.jsx";
import ModalBasket from "./components/modals/ModalBasket";
function App() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Catalog />
                </div>
            </main>
            <UserPage />
            <OrdersPage />
            <ProductModal />
            <ModalAddCard />
            <ModalBasket />
        </>
    );
}

export default App;
