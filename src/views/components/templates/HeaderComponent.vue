<template>
    <div class="container-fluid m-0 p-0">
        <nav :class="theme.navbar.navbar_bg" class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <router-link
                    :class="theme.navbar.navbar_color"
                    class="nav-link"
                    :to="{ name: PATHS_NAME.HOME }">
                <a class="navbar-brand" :class="theme.navbar.navbar_color" href="#"
                >Chaturanga <img src="../../../assets/images/chessLogo.png" alt=""
                /></a>
                </router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle btn btn-dark"
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img class="text-center" :src="theme.logo.image" alt="eeeee"/>
                            </a>
                            <ul style="width: 50px !important" class="dropdown-menu">
                                <li
                                    class="d-flex flex-column align-items-center justify-content-center"
                                    v-for="(img, index) in logos"
                                    :key="index"
                                >
                                    <div
                                        style="cursor: pointer"
                                        @click="changeTheme(index)"
                                        class="col text-center"
                                    >
                                        <a class="dropdown-item text-center"
                                        ><img
                                            class="text-center"
                                            :src="img.image"
                                            :alt="img.alt"/></a
                                        ><span>{{ img.alt }}</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <template v-if="!$store.getters.is_authenticated">
                            <li class="nav-item">
                                <router-link
                                    :class="theme.navbar.navbar_color"
                                    class="nav-link active"
                                    :to="{ name: PATHS_NAME.LOGIN }"
                                >Sign In
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    :class="theme.navbar.navbar_color"
                                    class="nav-link"
                                    :to="{ name: PATHS_NAME.REGISTER }"
                                >Sign Up
                                </router-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="nav-item">
                                <router-link
                                    :class="theme.navbar.navbar_color"
                                    class="nav-link"
                                    :to="{ name: PATHS_NAME.DASHBOARD }"
                                >My Account
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    :class="theme.navbar.navbar_color"
                                    class="nav-link"
                                    :to="{ name: PATHS_NAME.HOME }"
                                >Ranking
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    :class="theme.navbar.navbar_color"
                                    class="nav-link"
                                    :to="{ name: PATHS_NAME.HOME }"
                                >Play
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-link" @click="logout()">Deconnecter</button>
                            </li>
                        </template>


                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
//import { DefaultTheme, DefaultLogo, DefaultNavCodeColor } from "@/helpers/defaultTheme";
import { DefaultTheme, DefaultLogo, DefaultNavCodeColor } from "../../../helpers/defaultTheme";
//import { PATHS_NAME } from '@/constants';
import { PATHS_NAME } from '../../../constants';

export default defineComponent({
    name: 'HeaderComponent',
    data() {
        return {
            theme: DefaultTheme,
            logos: DefaultLogo,
            navCodeColor: DefaultNavCodeColor,
            PATHS_NAME
        }
    },
    methods: {
        changeTheme(index: number) {
            switch (index) {
                case 0:
                    this.theme.sub_color = 'sub_color_gryffindor';
                    break;
                case 1:
                    this.theme.sub_color = 'sub_color_slytherin';
                    break;
                case 2:
                    this.theme.sub_color = 'sub_color_ravenclaw';
                    break;
                case 3:
                    this.theme.sub_color = 'sub_color_hufflepuff';
                    break;

                default:
                    this.theme.sub_color = 'sub_color_gryffindor';
                    break;
            }

            this.theme.logo = this.logos[index];
            this.theme.navbar = this.navCodeColor[index];
            this.$store.dispatch('theme', this.theme);
        },

        /**
         * Déconnecter un utilisateur
         */
        logout() {
            this.$store.dispatch('logout');
            this.$router.push({name: 'HOME'}); // Pour l'instant on redirige vers la page d'accueil
        },
    },
    mounted() {
        if (this.$store.state.theme) {
            this.theme = this.$store.state.theme;
        }
    },
});
</script>

<style scoped>
@import url("@/assets/css/header.css");
</style>
