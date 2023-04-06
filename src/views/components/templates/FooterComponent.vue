<template>
  <footer>
    <div class="container-fluid m-0 p-0">
      <nav :class="theme.navbar.navbar_bg" class="nav navbar navbar-expand-lg">
        <div class="container-fluid d-flex justify-content-center">
          <router-link
            class="nav-link active"
            :class="theme.navbar.navbar_color"
            :to="{ name: 'HOME' }"
            >Accueil</router-link
          >
          <router-link
            class="nav-link active"
            :class="theme.navbar.navbar_color"
            :to="{ name: 'CHESS_RULES' }"
            >Règles</router-link
          >
          <!--                <router-link class="nav-link" :to="{name: 'ABOUT'}">À propos</router-link>-->
          <!--                <router-link class="nav-link" :to="{name: 'CONTACT'}">Contact</router-link>-->
        </div>
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
import { PATHS_NAME } from '@/constants';

export default defineComponent({
  name: 'FooterComponent',
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

<style>
footer {
  background-color: #f2f2f2;
}
</style>
