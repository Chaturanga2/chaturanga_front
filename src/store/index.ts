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
    theme: (state) => state.theme,
    user: (state) => state.user,
    is_authenticated: (state) => {
      console.log(state.token)
        return state.token !== '';
    }
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user
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

    setLogout(state) {
        state.user = {} as User;
        state.token = '';
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        console.log(state.token)
    },

    // Mutations are used to set the state values after page refresh
    initializeStore(state) {
      if (localStorage.getItem('user')) {
        state.user = JSON.parse(localStorage.getItem('user') || '{}');
      }
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token') || '';
      }
      if (localStorage.getItem('theme')) {
        state.theme = JSON.parse(localStorage.getItem('theme') || '{}');
      }
    },
  },
  actions: {
    login({ commit }, data: UserLoginResponse) {
      commit('setUser', data.user);
      commit('setToken', data.token);
    },

    logout({ commit }) {
      commit('setLogout');
    },

    theme({ commit }, theme: Theme) {
      commit('setTheme', theme);
    },


  },
  modules: {},
});
