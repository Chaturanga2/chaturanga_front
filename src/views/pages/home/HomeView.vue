<template>
  <div class="container">
      <h1 class="text-center">Bienvenue sur Chaturanga, le nouveau jeu d'échecs en ligne !</h1>

      <div class="col text-center py-5 mt-5">
          <img src="../../../assets/board.png" class="rounded w-50 h-50" alt="">
      </div>

    <div class="col col-md-10 text-center card-body mx-auto">
      <h2>Qui sommes nous ?</h2>

      <p class="mb-4">Chaturanga est un site Web pour jouer aux échecs version sorcier entre amis ou avec des inconnus en
        ligne</p>
      <h2>Mais comment jouer à ce jeu ?</h2>
      <p class="mb-4">Connectez-vous ou inscrivez-vous sur le site pour accéder à la page du jeu accessible depuis la
        barre
        de navigation !
        <br>
        Vous pourrez choisir votre mode de jeu (avec un ami en ligne ou avec un inconnu au hasard) et sélectionner le
        niveau de difficulté du jeu.
      </p>
      <button class="btn btn-lg btn-danger mb-3 mt-3 ">
        Jouez maintenant
      </button>

      <p>Vous ne connaissez pas les règles du jeu ? <router-link to="/ChessRules">Cliquez ici</router-link></p>

      <ChessBoardComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChessBoardComponent from "@/views/components/ChestBoard/ChessBoardComponent.vue";
import socket from "../../../socketIo";

export default defineComponent({
  name: "HomeView",

  components: {
    ChessBoardComponent
  },

  data() {
    return {
      value: "",
      message: ""
    };
  },

  mounted() {
    // Écouter l'événement "message" du serveur Socket.IO
    socket.on("connect", () => console.log("connected"));

    // Émettre l'événement "chat" vers le serveur Socket.IO
    socket.emit("message", "Connexion done");
  },

  methods: {
    sendMessage() {
      socket.emit("message", this.message);
      this.message = ""
    },
  },
});
</script>

<style scoped></style>
