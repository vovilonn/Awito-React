export const updateDB = (state) => () => {
    const data = JSON.stringify(state());
    localStorage.setItem("state", data);
};

export const getStateFromDB = () => {
    const state = JSON.parse(localStorage.getItem("state")) || [];
    return state;
};
