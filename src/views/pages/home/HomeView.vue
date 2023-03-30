<template>
  <div class="">
    <h1>Home</h1>
    <img alt="Vue logo" src="../../../assets/images/logo.png" />
    <p>Welcome to Your Vue.js + TypeScript App</p>

    <form @submit.prevent="sendMessage">
      <input type="text" id="message" placeholder="Message..." v-model="message" />
      <input type="submit" value="Send" />
    </form>

    <div id="messages"></div>
    <img src="" alt="" />
    <h1>dfgdfgdfgdfg</h1>
    <p>fdgdsgfgdfgfdgdfgdfgdfgdfgdfgdfgdfg</p>
    <h1>dfgdfgdfgdfg</h1>
    <p>fdgdsgfgdfgfdgdfgdfgdfgdfgdfgdfgdfg</p>

    <button btn>zefefzefzefzf</button>

    <ChessBoardComponent />
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
