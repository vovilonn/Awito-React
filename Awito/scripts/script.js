let baseUser = {
    id: 0,
    login: "Гость",
    password: "",
    orders: [],
    basket: [],
    status: "user",
};
let admin = {
    id: 1,
    login: "admin",
    password: "root",
    orders: [],
    basket: [],
    status: "admin",
};

let ordersCount = localStorage.getItem("ordersCount");
let dataBase = JSON.parse(localStorage.getItem("awito")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [admin, baseUser];
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
let user = users[currentUser.userId - 1] || baseUser;

// user.orders = [] // reset orders

let counter = dataBase.length;
const modals = document.querySelectorAll(".modal");
const btnAdd = document.querySelectorAll(".add__ad");
const modalAdd = document.querySelector(".modal__add");
const modalBtnSubmit = document.querySelector(".modal__btn-submit");
const modalSubmit = document.querySelector(".modal__submit");
const catalog = document.querySelector(".catalog");
const modalItem = document.querySelector(".modal__item");
const modalBtnWarning = document.querySelector(".modal__btn-warning");
const modalFileInput = document.querySelector(".modal__file-input");
const modalFileBtn = document.querySelector(".modal__file-btn");
const modalImageAdd = document.querySelector(".modal__image-add");
const searchInput = document.querySelector(".search__input");
const menuContainer = document.querySelector(".menu__container");
const modalBasket = document.querySelector(".modal__basket");
const basketBtn = document.querySelector(".basket");
const basket = document.querySelector(".basket__content");
const reg_checkbox = document.querySelector(".sign-in__checkbox");
const userBtn = document.querySelector(".user");
const modalSignIn = document.querySelector(".modal_sign-in");
const modalRegister = document.querySelector(".modal_register");
const signInLogin = document.querySelector(".sign_in_login");
const signInPassword = document.querySelector(".sign_in_password");
const signUpLogin = document.querySelector(".sign_up_login");
const signUpPassword = document.querySelector(".sign_up_password");
const modalUserInfo = document.querySelector(".modal_userInfo");
const userInfoLogin = document.querySelector(".user-info__login");
const userInfoBasket = document.querySelector(".user-info__basket b");
const userInfoOrders = document.querySelector(".user-info__orders b");
const modalOrders = document.querySelector(".modal__orders");
const orders = document.querySelector(".orders__content");

const elementsModalSubmit = [...modalSubmit.elements].filter(
    (elem) => elem.tagName !== "BUTTON"
);
let infoPhoto = {};

const addZero = function (num) {
    if (num / 10 > 0) {
        return "0" + String(num);
    }
    return num;
};

const renderBasket = function () {
    if (user.basket.length > 0) {
        basket.innerHTML = `<input type="button" value="Купить" class="buy__button">`;
        user.basket.forEach((item) => {
            const basketId = user.basket.indexOf(item);
            basket.insertAdjacentHTML(
                "afterbegin",
                `
    <div class="basket__item" data-basket-id="${basketId}">
          <div class="basket__item-img">
          <img src="data:image/jpeg;base64,${item.image}" alt="" >
          </div>
					<div class="basket__item-description">
            <h4 class="basket__item-name">${item.nameItem}</h4>
						<div class="basket__item-price">${item.costItem} ₽</div>
          </div>
          <span>Кол-во: <b class="basket__quantity">${item.quantity}</b></span>
					<i class="fas fa-trash-alt basket__item-remove"></i>
				</div>
    `
            );
        });
    } else {
        basket.innerHTML = "Корзина пуста";
    }
};

const saveDB = function () {
    localStorage.setItem("ordersCount", ordersCount);
    localStorage.setItem("awito", JSON.stringify(dataBase));
};

const saveUsers = function () {
    localStorage.setItem("users", JSON.stringify(users));
};

const createUser = function () {
    const id = users.length + 1;
    const login = signUpLogin.value;
    const password = signUpPassword.value;

    if (login === "" || password === "") {
        alert("Заполните все поля!");
    } else if (password.length < 6) {
        alert("Пароль должен быть не менее 6ти знаков!");
    } else if (!reg_checkbox.classList.contains("checked")) {
        alert("Вы не приняли условия пользования!");
    } else {
        users.push({
            id: id,
            login: login,
            password: password,
            orders: [],
            basket: [],
            status: "user",
        });
        saveUsers();
        location.reload();
    }
};

const checkForm = function () {
    const validForm = elementsModalSubmit.every((elem) => elem.value);
    modalBtnSubmit.disabled = !validForm;
    modalBtnWarning.style.display = validForm ? "none" : "";
};

const sign_in_up = function (target) {
    if (target.classList.contains("sign-in__register")) {
        modalSignIn.classList.add("hide");
        modalRegister.classList.remove("hide");
    } else if (target.classList.contains("sign-in__logIn")) {
        modalRegister.classList.add("hide");
        modalSignIn.classList.remove("hide");
    }
};

const closeModal = function (event) {
    const target = event.target;
    if (
        target.classList.contains("modal__close") ||
        target.classList.contains("modal") ||
        target.classList.contains("modal__buy-item") ||
        target.closest(".user-info__basket") ||
        target.closest(".user-info__orders") ||
        target.classList.contains("buy__button") ||
        target === this ||
        event.key === "Escape"
    ) {
        modals.forEach((elem) => {
            elem.classList.add("hide");
        });
        document.removeEventListener("keydown", closeModal);
        modalSubmit.reset();
        checkForm();
        modalImageAdd.src = "img/temp.jpg";
        modalFileBtn.textContent = "Добавить фото";
    }
}; // close modal windows func

const renderCard = function (DB = dataBase) {
    catalog.textContent = "";

    DB.forEach((item) => {
        catalog.insertAdjacentHTML(
            "beforeend",
            `
    <li class="card" data-id="${item.id}">
					<img class="card__image" src=" data:image/jpeg;base64,${item.image}" alt="test">
					<div class="card__description">
						<h3 class="card__header">${item.nameItem}</h3>
						<div class="card__price">${item.costItem} ₽</div>
					</div>
				</li>
    `
        );
    });
};

const signIn = function () {
    const login = signInLogin.value.trim();
    const password = signInPassword.value.trim();
    for (let i = 0; i < users.length; i++) {
        if (login === users[i].login && password === users[i].password) {
            var date = new Date();
            date.setDate(date.getDate() + 5);
            const visit = {
                date: date,
                userId: users[i].id,
            };
            localStorage.setItem("currentUser", JSON.stringify(visit));
            location.reload();
            break;
        }
    }
};

const setOrderStatus = function (status) {
    if (status === "canceled") {
        return "Отменён";
    }
    if (status === "process") {
        return "В обработке";
    }
    if (status === "success") {
        return "Выполнен";
    }
};

const renderOrders = function () {
    orders.innerHTML = "";
    if (user.orders.length > 0) {
        user.orders.forEach((item) => {
            orders.insertAdjacentHTML(
                "afterbegin",
                `
    <div class="orders__item ${item.order_status}" data-orders-id="${
                    item.orderId
                }">
          <div class="basket__item-img">
          <img src="data:image/jpeg;base64,${item.image}" alt="" >
          </div>
					<div class="basket__item-description">
            <h4 class="basket__item-name">${item.nameItem}</h4>
						<div class="basket__item-price">${item.costItem} ₽</div>
          </div>
          <div class="orders__item-info">
            <p class="orders__status">${setOrderStatus(item.order_status)}</p>
            <p class="orders__buy-date">${item.buyDate}</p>
          </div>
          <span>Кол-во: <b class="basket__quantity">${item.quantity}</b></span>
          <span class="fas fa-times orders-remove" style="${
              item.order_status === "canceled" ||
              item.order_status === "success"
                  ? "opacity: 0; cursor: inherit;"
                  : ""
          }"></span>
				</div>
    `
            );
        });
    } else {
        basket.innerHTML = "Корзина пуста";
    }
};

const openBasket = function () {
    modalBasket.classList.remove("hide");
    renderBasket();
    document.addEventListener("keydown", closeModal);
};

const openOrders = function () {
    modalOrders.classList.remove("hide");
    renderOrders();
    document.addEventListener("keydown", closeModal);
};

const userInfoRender = function () {
    userInfoLogin.innerHTML = "<b>Логин:</b> " + user.login;
    userInfoBasket.textContent = user.basket.length;
    userInfoOrders.textContent = user.orders.length;
};

searchInput.addEventListener("input", () => {
    const valueSearch = searchInput.value.trim().toLowerCase();

    if (valueSearch.length > 2) {
        const result = dataBase.filter(
            (item) =>
                item.nameItem.toLowerCase().includes(valueSearch) ||
                item.descriptionItem.toLowerCase().includes(valueSearch)
        );

        renderCard(result);
    } else {
        renderCard();
    }
});

modalFileInput.addEventListener("change", function changePhoto(event) {
    const target = event.target;
    const reader = new FileReader();
    const file = target.files[0];

    infoPhoto.filename = file.name;
    infoPhoto.size = file.size;

    reader.readAsBinaryString(file);

    reader.addEventListener("load", (event) => {
        if (infoPhoto.size < 200000) {
            modalFileBtn.textContent = infoPhoto.filename;
            infoPhoto.base64 = btoa(event.target.result);
            modalImageAdd.src = `data:image/jpeg;base64,${infoPhoto.base64}`;
        } else {
            modalFileBtn.textContent = "Размер файла не должен превышать 200Кб";
            modalFileInput.value = "";
            checkForm();
        }
    });
});

modalSubmit.addEventListener("input", checkForm);

modalSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    const itemObj = {};
    for (const elem of elementsModalSubmit) {
        itemObj[elem.name] = elem.value;
    }
    itemObj.id = counter++;
    itemObj.image = infoPhoto.base64;

    dataBase.push(itemObj);
    saveDB();
    closeModal({ target: modalAdd });
    renderCard();
});

btnAdd.forEach((elem) => {
    elem.addEventListener("click", function openModalAdd() {
        modalAdd.classList.remove("hide");
        modalBtnSubmit.disabled = true;
        document.addEventListener("keydown", closeModal);
    });
});

catalog.addEventListener("click", function openModalItem(event) {
    const target = event.target;
    if (target.closest(".card")) {
        const card = target.closest(".card");
        const item = dataBase.find((obj) => obj.id === +card.dataset.id);
        modalItem.innerHTML = `
    <div class="modal__block">
			<h2 class="modal__header">Купить</h2>
			<div class="modal__content">
				<div><img class="modal__image modal__image-item" src="data:image/jpeg;base64,${
                    item.image
                }" alt="test"></div>
				<div class="modal__description">
					<h3 class="modal__header-item">${item.nameItem}</h3>
					<p>Состояние: <span class="modal__status-item">${
                        item.status === "new" ? "Новый" : "Б/У"
                    }</span></p>
					<p>Описание:
						<span class="modal__description-item">${item.descriptionItem}</span>
					</p>
					<p>Цена: <span class="modal__cost-item">${item.costItem} ₽</span></p>
					<button class="btn-buy modal__buy-item">Купить</button>
				</div>
			</div>
			<button class="modal__close">&#10008;</button>
		</div>
    `;
        modalItem.classList.remove("hide");
        document.addEventListener("keydown", closeModal);

        const btnBuy = document.querySelector(".modal__buy-item");

        btnBuy.addEventListener("click", function (event) {
            let elem = Object.assign(item);
            if (!("quantity" in elem)) {
                elem.quantity = 1;
            }
            const check = user.basket.every((elem) => {
                return elem.id !== item.id;
            });

            if (check) {
                user.basket.push(elem);
            } else {
                elem.quantity++;
            }
            saveUsers();
        });
    }
});

menuContainer.addEventListener("click", function searchCategory(event) {
    const target = event.target;

    if (target.tagName === "A") {
        const result = dataBase.filter(
            (item) => item.category === target.dataset.category
        );
        renderCard(result);
    }
});

basketBtn.addEventListener("click", function openBasketModal() {
    openBasket();
});

basket.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("basket__item-remove")) {
        const elem_id = target.closest(".basket__item").dataset.basketId;
        user.basket[elem_id].quantity = 1;
        user.basket.splice(elem_id, 1);
        renderBasket();
        saveUsers();
    } else if (target.classList.contains("buy__button")) {
        const orders = user.basket.filter((elem) => {
            let bool = true;
            for (let i = 0; i < user.orders.length; i++) {
                const order = user.orders[i];
                if (elem.id === order.id) {
                    bool = false;
                    break;
                }
            }
            return bool;
        });

        orders.forEach((order) => {
            const date = new Date();
            const orderId = ordersCount++;
            const buyDate = `${addZero(date.getDate())}.${addZero(
                date.getMonth() + 1
            )}.${date.getFullYear()}`;
            order.buyDate = buyDate;
            order.orderId = orderId;
            order.order_status = "process";
            user.orders.unshift(order);
            saveDB();
        });
        saveUsers();
    }
});
reg_checkbox.addEventListener("click", function () {
    this.classList.toggle("checked");
});

userBtn.addEventListener("click", () => {
    if (user !== baseUser) {
        userInfoRender();
        modalUserInfo.classList.remove("hide");
    } else {
        modalSignIn.classList.remove("hide");
    }
    document.addEventListener("keydown", closeModal);
});

modalRegister.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("sign-in__button")) {
        createUser();
    }
    sign_in_up(target);
});

modalSignIn.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("sign-in__button")) {
        signIn();
    }
    sign_in_up(target);
});

modalOrders.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("orders-remove")) {
        const item = target.closest(".orders__item");
        const status = item.querySelector(".orders__status");
        user.orders.forEach((elem) => {
            if (item.dataset.ordersId === elem.orderId) {
                elem.order_status = "canceled";
                item.classList.add("canceled");
                item.classList.remove("process");
                status.textContent = "Oтменён";
                renderOrders();
                saveUsers();
            }
        });
    }
});

modals.forEach((elem) => {
    elem.addEventListener("click", closeModal);
});

modalUserInfo.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("sign_out")) {
        localStorage.removeItem("currentUser");
        location.reload();
    } else if (target.closest(".user-info__basket")) {
        openBasket();
    } else if (target.closest(".user-info__orders")) {
        openOrders();
    }
});

saveDB();
saveUsers();
renderCard();
