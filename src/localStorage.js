export const updateLS = (state) => () => {
    const data = JSON.stringify(state());
    localStorage.setItem("state", data);
};

export const getStateFromLS = () => {
    const state = JSON.parse(localStorage.getItem("state")) || [];
    return state;
};
