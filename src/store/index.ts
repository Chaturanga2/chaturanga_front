import {createStore} from "vuex";
import {KEYS, ACTIONS_TYPE} from "@/constants";
import {Theme} from "@/types/themes";
import {User, UserLoginResponse} from "@/types/users";


interface StoreState {
    user: User | null;
    token: string | null;
    theme: Theme | null;
}

export default createStore<StoreState>({
    state: {
        //---------------- User ----------------²
        user: null,
        token: null,

        //---------------- Theme ----------------²
        theme: null,
    },
    getters: {
        user_id: (state) => {
            return state.user?.id;
        },
        username: (state) => {
            return state.user?.username;
        },
        is_authenticated: (state) => {
            console.log(state.token);
            return state.token !== null;
        },
    },
    mutations: {
        setUser(state, user: User) {
            state.user = user
            localStorage.setItem('user', JSON.stringify(user));
        },

        setToken(state, token: string) {
            state.token = token;
            localStorage.setItem(KEYS.USER_TOKEN, token);
        },

        setTheme(state, theme: Theme) {
            state.theme = theme;
            const stringifiedUserTheme = JSON.stringify(theme);
            localStorage.setItem(KEYS.USER_THEME, stringifiedUserTheme);
        },

        setLogout(state) {
            state.user = {} as User;
            state.token = "";
            localStorage.removeItem(KEYS.USER);
            localStorage.removeItem(KEYS.USER_TOKEN);
            console.log(state.token);
        },

        // Mutations are used to set the state values after page refresh
        initializeStore(state) {
            const user = localStorage.getItem(KEYS.USER);
            const userToken = localStorage.getItem(KEYS.USER_TOKEN);
            const userTheme = localStorage.getItem(KEYS.USER_THEME);

            state.user = user ? JSON.parse(user) : state.user;
            state.token = userToken ? userToken : state.token;
            state.theme = userTheme ? JSON.parse(userTheme) : state.theme;
        },
    },
    actions: {
        login({commit}, data: UserLoginResponse) {
            commit(ACTIONS_TYPE.SET_USER, data.user);
            commit(ACTIONS_TYPE.SET_USER_TOKEN, data.token);
        },
        theme({commit}, theme: Theme) {
            commit(ACTIONS_TYPE.SET_USER_THEME, theme);
        },

        logout({commit}) {
            commit(ACTIONS_TYPE.SET_LOGOUT);
        },
    },
    modules: {},
});
