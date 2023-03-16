<template>
    <div class="container-fluid m-0 p-0">
        <nav :class="$store.getters.navBar.navbar_bg" class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" :class="$store.getters.navBar.navbar_color" href="#"
                >Chaturanga <img src="../../../assets/chessLogo.png" alt=""
                /></a>
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
                        <li class="nav-item">
                            <router-link
                                :class="$store.getters.navBar.navbar_color"
                                class="nav-link active"
                                :to="{ name: 'HOME' }"
                            >Home
                            </router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                :class="$store.getters.navBar.navbar_color"
                                class="nav-link"
                                :to="{ name: 'HOME' }"
                            >Link
                            </router-link
                            >
                        </li>
                        <li class="nav-item dropdown ">
                            <a

                                class="nav-link dropdown-toggle btn btn-dark"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img class="text-center" :src="$store.getters.logo.image" alt="eeeee"/>
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
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <RouterView/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

/**enum Theme {
  GRYFFINDOR = 'gryffindor',
  SLYTHERIN = 'slytherin',
  RAVENCLAW = 'ravenclaw',
  HUFFLEPUFF = 'hufflepuff',
} */

export default defineComponent({
    name: 'HeaderComponent',
    data() {
        return {
            isOpen: false,
            //theme: Theme.GRYFFINDOR,
            theme: {
                logo: {
                    image: require('@/assets/Gryffindor-Logo.png'),
                    alt: '',
                },
                navbar: {
                    navbar_bg: 'nav_bar_bg_gryffindor',
                    navbar_color: 'nav_bar_color_gryffindor',
                },
                sub_color: 'sub_color_gryffindor',
            },

            nav_code_colors: [
                {
                    navbar_bg: 'nav_bar_bg_gryffindor',
                    navbar_color: 'nav_bar_color_gryffindor',
                },
                {
                    navbar_bg: 'nav_bar_bg_slytherin',
                    navbar_color: 'nav_bar_color_slytherin',
                },
                {
                    navbar_bg: 'nav_bar_bg_ravenclaw',
                    navbar_color: 'nav_bar_color_ravenclaw',
                },
                {
                    navbar_bg: 'nav_bar_bg_hufflepuff',
                    navbar_color: 'nav_bar_color_hufflepuff',
                },
            ],

            logos: [
                {
                    alt: 'Gryffindor',
                    image: require('@/assets/Gryffindor-Logo.png'),
                },
                {
                    alt: 'Slytherin',
                    image: require('@/assets/Slytherin-Logo.png'),
                },
                {
                    alt: 'Ravenclaw',
                    image: require('@/assets/Ravenclaw-Logo.png'),
                },
                {
                    alt: 'Hufflepuff',
                    image: require('@/assets/Hufflepuff-Logo.png'),
                },
            ],
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
            this.theme.navbar = this.nav_code_colors[index];
            this.$store.dispatch('theme', this.theme);

            console.log(index);
        },

        toggleNav() {
            this.isOpen = !this.isOpen;
        },
        /**changeTheme(theme: Theme) {
      this.theme = theme;
      switch (theme) {
        case Theme.GRYFFINDOR:
          this.logo = '../../../assets/Gryffindor-Logo.png';
          document.documentElement.style.setProperty(
            '--primary-color',
            '#7F0909'
          );
          document.documentElement.style.setProperty(
            '--secondary-color',
            '#FFD700'
          );
          break;
        case Theme.SLYTHERIN:
          this.logo = '../../../assets/Slytherin-Logo.png';
          document.documentElement.style.setProperty(
            '--primary-color',
            '#2A623D'
          );
          document.documentElement.style.setProperty(
            '--secondary-color',
            '#AAA9A9'
          );
          break;
        case Theme.RAVENCLAW:
          this.logo = '../../../assets/Ravenclaw-Logo.png';
          document.documentElement.style.setProperty(
            '--primary-color',
            '#0E1A40'
          );
          document.documentElement.style.setProperty(
            '--secondary-color',
            '#946B2D'
          );
          break;
        case Theme.HUFFLEPUFF:
          this.logo = '../../../assets/Hufflepuff-Logo.png';
          document.documentElement.style.setProperty(
            '--primary-color',
            '#FFC107'
          );
          document.documentElement.style.setProperty(
            '--secondary-color',
            '#000000'
          );
          break;
        default:
          break;
      }
    },**/
    },
});
</script>

<style scoped>
/** NAVBAR*/
.nav_bar_bg_gryffindor {
    background-color: #740001 !important;
}

.nav_bar_bg_slytherin {
    background-color: #1a472a !important;
}

.nav_bar_bg_ravenclaw {
    background-color: #0e1a40 !important;
}

.nav_bar_bg_hufflepuff {
    background-color: #ecb939 !important;
}

.nav_bar_color_gryffindor {
    color: #d3a625 !important;
}

.nav_bar_color_slytherin {
    color: #aaaaaa !important;
}

.nav_bar_color_ravenclaw {
    color: #946b2d !important;
}

.nav_bar_color_hufflepuff {
    color: #372e29 !important;
}

.sub_color_gryffindor {
    color: #ac0001 !important;
}

.sub_color_slytherin {
    color: #2a623d !important;
}

.sub_color_ravenclaw {
    color: #222f5b !important;
}

.sub_color_hufflepuff {
    color: #f0c75e !important;
}

/** END NAVBAR*/
img {
    height: 32px;
}

.nav {
    transition: background-color 0.3s ease;
    color: var(--primary-color);
}

.navbar-light .navbar-nav .nav-link {
    color: var(--primary-color);
    padding: 10px;
}

.dropdown-menu {
    width: 50px;
}

.navbar-light .navbar-nav .nav-link:hover {
    color: var(--secondary-color);
}

.btn-theme {
    border: none;
    margin-right: 10px;
    padding: 0;
    background-color: transparent;
}

.btn-theme:focus {
    outline: none;
}

.btn-theme:hover {
    cursor: pointer;
}
</style>
