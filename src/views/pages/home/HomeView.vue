<template>
  <div class="container">
    <h1 class="text-center">
      Bienvenue sur Chaturanga, le nouveau jeu d'échecs en ligne !
    </h1>

    <div class="col text-center py-5 mt-5">
      <img src="../../../assets/board.png" class="rounded w-50 h-50" alt="" />
    </div>

    <div class="col col-md-10 text-center card-body mx-auto">
      <h2>Qui sommes nous ?</h2>

      <p class="mb-4">
        Chaturanga est un site Web pour jouer aux échecs version sorcier entre
        amis ou avec des inconnus en ligne
      </p>
      <h2>Mais comment jouer à ce jeu ?</h2>
      <p class="mb-4">
        Connectez-vous ou inscrivez-vous sur le site pour accéder à la page du
        jeu accessible depuis la barre de navigation !
        <br />
        Vous pourrez choisir votre mode de jeu (avec un ami en ligne ou avec un
        inconnu au hasard) et sélectionner le niveau de difficulté du jeu.
      </p>
      <button
        v-if="theme.sub_color === 'sub_color_hufflepuff'"
        :class="theme.navbar.navbar_bg"
        class="btn btn-lg mb-3 mt-3"
      >
        Jouez maintenant
      </button>
      <button
        v-else
        :class="theme.navbar.navbar_bg"
        class="btn btn-dark btn-lg mb-3 mt-3"
      >
        Jouez maintenant
      </button>
      <p>
        Vous ne connaissez pas les règles du jeu ?
        <router-link to="/ChessRules">Cliquez ici</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  DefaultTheme,
  DefaultLogo,
  DefaultNavCodeColor,
} from '@/helpers/defaultTheme';
import { PATHS_NAME } from '@/constants';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      theme: DefaultTheme,
      logos: DefaultLogo,
      navCodeColor: DefaultNavCodeColor,
      PATHS_NAME,
    };
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
  },
  mounted() {
    if (this.$store.getters.theme) {
      this.theme = this.$store.getters.theme;
    }
  },
});
</script>

<style scoped></style>
