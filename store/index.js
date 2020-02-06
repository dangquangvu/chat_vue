import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import socket from "~/plugins/socket.js";
export const state = () => ({
    token: null,
    user: {},
    conversation: {},
    currentConversationId: null,
    recipientUserID: null,
    fetched: null,
    ticked: {},
    messages: []
});

export const getters = {
    currentConversation(state) {
        return state.currentConversationId ?
            state.conversations[state.currentConversationId] :
            null;
    },
    recipientUser(state) {
        return state.users ? state.users[state.recipientUserID] : null;
    },
    getMess(state) {
        return state.messages;
    }
};

export const mutations = {
    SET_FETCHED(state) {
        state.fetched = true;
    },
    setToken(stage, newToken) {
        stage.token = newToken;
    },
    addTokenLocalStorage(state, token) {
        localStorage.setItem("accessToken", state.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    removeTokenLocalStorage() {
        localStorage.removeItem("accessToken");
    },
    setUser(state, user) {
        user.online = true;
        state.user = user;
    },
    reset: state => {
        state.token = null;
        state.user = {};
    },
    setTicked(state, conversationId) {
        state.ticked = conversationId;
    },
    pushMess(state, obj) {
        state.messages.push(obj);
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
    },
    SOCKET_mesage(data) {
        console.log("message", data);
    },
    getFriend(data) {
        let friends = [];
        axios.get("http://localhost:3335/admin/friends").then(data => {
            console.log(data, 111);
            return;
        });
    }
};

// export const plugins = [createPersistedState()];