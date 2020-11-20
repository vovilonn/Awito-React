import React from "react";
import "./style.css";
import Header from "./components/Header/HeaderContainer";
import Catalog from "./components/CatalogPage/Catalog";
import UserPage from "./components/UserPage/UserPage";
import OrdersPage from "./components/OrdersPage/OrdersPage";
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
        </>
    );
}

export default App;
