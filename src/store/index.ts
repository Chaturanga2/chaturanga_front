import { createStore } from 'vuex'
import {User} from "@/types/users";

export default createStore({
  state: {
    //---------------- User ----------------²
    user: {} as User,
    token: "" as string,
  },
  getters: {
  },
  mutations: {

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
  },
  modules: {
  }
})
