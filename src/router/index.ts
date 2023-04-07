import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { KEYS, PATHS_NAME } from '@/constants';

import LayoutView from "@/views/pages/LayoutView.vue";
import HomeView from "@/views/pages/home/HomeView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import LoginView from "@/views/pages/authentication/LoginView.vue";
import RegisterView from "@/views/pages/register/RegisterView.vue";
import ChessRulesView from "@/views/pages/Rules/ChessRulesView.vue";
import DashboardView from "@/views/pages/Dashboard/DashboardView.vue";
import GameView from "@/views/game/GameView.vue";
import AllUsersView from "@/views/pages/Dashboard/AllUsersView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/",
    component: LayoutView,
    children: [
      {path: "/login", name: "LOGIN", component: LoginView},
      {path: "/register", name: PATHS_NAME.REGISTER, component: RegisterView},
      {path: "/dashboard", name: PATHS_NAME.DASHBOARD, component: DashboardView },
      {path: "/", name: PATHS_NAME.HOME, component: HomeView},
      {path: "/ChessRules", name: PATHS_NAME.CHESS_RULES, component: ChessRulesView},
        {path: "/game", name: "GAME", component: GameView},
        {path: "/users", name: "USERS", component: AllUsersView}
    ],
  },
  { path: "/:pathMatch(.*)*", name: PATHS_NAME.NOT_FOUND, component: PageNotFoundView },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }; // scroll to top of the page on route change
    }
});

// redirect to dashboard if user is already logged in and trying to access login or register page
// redirect to login if user is not logged in and trying to access dashboard page

router.beforeEach((to, from, next) => {
    const notPublicPages = ['/dashboard'];
    // const authRequired = !publicPages.includes(to.path);
    const authRequired = notPublicPages.includes(to.path);
    const loggedIn = localStorage.getItem(KEYS.USER);

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        return next('/sign-in');
    } else {
        if ((to.name === 'LOGIN' || to.name === 'REGISTER') && loggedIn) {
            console.log('redirect to dashboard');
            return next('/dashboard');
        }
        next();
    }
});
export default router;
