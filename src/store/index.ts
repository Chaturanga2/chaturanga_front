import { createStore } from "vuex";
import { KEYS, ACTIONS_TYPE } from "@/constants";
import { Theme } from "@/types/themes";
import { User, UserLoginResponse } from "@/types/users";

export default createStore({
	state: {
		//---------------- User ----------------²
		user: {} as User,
		token: "" as string,

		//---------------- Theme ----------------²
		theme: {} as Theme,
	},
	getters: {
		theme: (state) => state.theme,
		user: (state) => state.user,
		is_authenticated: (state) => {
			console.log(state.token);
			return state.token !== "";
		},
	},
	mutations: {
		setUser(state, user: User) {
			state.user = {
				id: user.id,
			};
			const stringifiedUser = JSON.stringify(user);
			localStorage.setItem(KEYS.USER, stringifiedUser);
		},

		setToken(state, token: string) {
			state.token = token;
			localStorage.setItem(KEYS.USER_TOKEN, KEYS.USER_TOKEN);
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

			if ((user && userToken && userTheme) === null) return state;

			state.user = user !== null ? JSON.parse(user) : state.user;
			state.token = userToken !== null ? userToken : state.token;
			state.theme = userTheme !== null ? JSON.parse(userTheme) : state.theme;
		},
	},
	actions: {
		login({ commit }, data: UserLoginResponse) {
			commit(ACTIONS_TYPE.SET_USER, data.user);
			commit(ACTIONS_TYPE.SET_USER_TOKEN, data.token);
		},
		theme({ commit }, theme: Theme) {
			commit(ACTIONS_TYPE.SET_USER_THEME, theme);
		},

		logout({ commit }) {
			commit(ACTIONS_TYPE.SET_LOGOUT);
		},
	},
	modules: {},
});
