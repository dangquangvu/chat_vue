import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

export default ({ store }) => {
    window.onNuxtReady(() => {
        createPersistedState({
            key: [token]
        })(store);
    });
};
