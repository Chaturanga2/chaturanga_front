import { createStore } from 'vuex'
import {User, UserRegisterResponse, UserLoginResponse} from "@/types/users";

export default createStore({
  state: {
    //---------------- User ----------------²
    user: {} as User,
    token: "" as string,
  },
  getters: {
  },
  mutations: {

    setUser(state, user: User){
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user))
    },

    setToken(state, token: string){
      state.token = token;
      localStorage.setItem("token", token)
    },

    // Mutations are used to set the state values after page refresh
    initializeStore(state) {
      if (localStorage.getItem("user")) {
        state.user = JSON.parse(localStorage.getItem("user") || "{}");
      }
      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token") || "";
      }
    },
  },
  actions: {
    login({commit}, data: UserLoginResponse){
      commit("setUser", data.user)
      commit("setToken", data.token)
    }
  },
  modules: {
  }
})
