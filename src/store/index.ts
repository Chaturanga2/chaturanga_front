import { createStore } from 'vuex';
import { User } from '@/types/users';
import { UserLoginResponse } from '@/types/users';
import { Theme, Logo, Navbar } from '@/types/themes';

export default createStore({
  state: {
    //---------------- User ----------------²
    user: {} as User,
    token: '' as string,

    //---------------- Theme ----------------²
    theme: {} as Theme,
  },
  getters: {
    logo: (state) => state.theme.logo,
    navBar: (state) => state.theme.navbar,
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },

    setToken(state, token: string) {
      state.token = token;
      localStorage.setItem('token', token);
    },

    setTheme(state, theme: Theme) {
      state.theme = theme;
      localStorage.setItem('theme', JSON.stringify(theme));
    },

    // Mutations are used to set the state values after page refresh
    initializeStore(state) {
      if (localStorage.getItem('user')) {
        state.user = JSON.parse(localStorage.getItem('user') || '{}');
      }
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token') || '';
      }
    },
  },
  actions: {
    login({ commit }, data: UserLoginResponse) {
      console.log(data);
      commit('setUser', data.user);
      commit('setToken', data.token);
    },
    theme({ commit }, theme) {
      console.log(theme);
      commit('setTheme', theme);
    },
  },
  modules: {},
});
