import axios from "axios";
import createPersistedState from "vuex-persistedstate";

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
        axios.defaults.headers.common["Authorization"] = token;
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
    },
    logout({ commit }) {
        commit("reset", "");
        commit("removeTokenLocalStorage");
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const plugins = [createPersistedState()];
