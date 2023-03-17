<template>
  <footer :class="theme.navbar.navbar_bg">
    <div class="container d-flex justify-content-center">
      <nav class="nav">
        <router-link
          class="nav-link"
          :class="theme.navbar.navbar_color"
          :to="{ name: 'HOME' }"
          >Home</router-link
        >
        <router-link
          class="nav-link"
          :class="theme.navbar.navbar_color"
          :to="{ name: 'CHESS_RULES' }"
          >Rules</router-link
        >
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  DefaultTheme,
  DefaultLogo,
  DefaultNavCodeColor,
} from '@/helpers/defaultTheme';

export default defineComponent({
  name: 'HeaderComponent',
  data() {
    return {
      theme: DefaultTheme,
      logos: DefaultLogo,
      navCodeColor: DefaultNavCodeColor,
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
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({ name: 'HOME' }); // Pour l'instant on redirige vers la page d'accueil
    },
  },
  mounted() {
    if (this.$store.getters.theme) {
      this.theme = this.$store.getters.theme;
    }
  },
});
</script>

<style>
footer {
  background-color: #f2f2f2;
}
</style>
