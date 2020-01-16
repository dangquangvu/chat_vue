import axios from "axios";
export const state = () => ({
    token: null,
    user: {}
});

export const mutations = {
    setToken(stage, newToken) {
        stage.token = newToken;
    },
    addTokenLocalStorage(state, token) {
        localStorage.setItem("accessToken", state.token);
    },
    removeTokenLocalStorage() {
        localStorage.removeItem("accessToken");
    },
    setUser(state, user) {
        state.user = user;
    },
    reset: state => {
        state.token = null;
        state.user = {};
    }
};

export const actions = {
    login({ commit, dispatch }, { token, user }) {
        commit("setToken", token);
        commit("setUser", user);
        commit("addTokenLocalStorage", token);
        axios.defaults.headers.common["Authorization"] = token;
    },
    logout({ commit }) {
        commit("reset", "");
        commit("removeTokenLocalStorage");
    }
};