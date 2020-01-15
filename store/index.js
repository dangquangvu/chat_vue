export const state = () => ({
    token: ""
});

export const mutations = {
    getState(stage, newToken) {
        stage.token = newToken;
    },
    addToken(state, token) {
        localStorage.setItem(token, state.token);
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1);
    }
};

export const actions = {
    getToken() {
        localStorage.setItem("");
    }
};