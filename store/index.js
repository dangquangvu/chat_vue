import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import socket from "~/plugins/socket.js";
export const state = () => ({
    token: null,
    user: {},
    conversationIdTicked: {},
    fetched: null,
    ticked: {},
    messages: []
});

export const getters = {
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
    setTicked(state, friendId) {
        state.ticked = friendId;
    },
    setConversation(state, conversationIdTicked) {
        state.conversationIdTicked = conversationIdTicked;
    },
    pullMess(state, obj) {
        state.messages.push(obj);
    },
    pushMess(state, obj) {
        state.messages.map(element => {
            if (element.conversationId == obj.conversationId) {
                element.mess.push(obj);
                // console.log(element.mess);
            }
        });
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
        axios.get("http://localhost:3335/message/friends").then(data => {
            console.log(data, 111);
            return;
        });
    },
    async sendMessServer({ commit }, obj) {
        let data = await axios.post("http://localhost:3335/message/send_message", {
            message: obj
        });
        if (data) {
            commit("pushMess", obj);
            socket.emit("send_message", obj);
            console.log("sendMessServer");
        }
    }
};

// export const plugins = [createPersistedState()];