<template>
    <div>
      <h2 class="my-3">Mes amis</h2>
      <div v-if="friends.length > 0">
        <div v-for="(friend, index) in friends" :key="index">
          <p>{{ friend.name }}</p>
          <p>{{ friend.email }}</p>
        </div>
      </div>
      <div v-else>
        <p>Vous n'avez pas encore d'amis.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MyFriends",
    data() {
      return {
        friends: [],
      };
    },
    mounted() {
      this.getFriends();
    },
    methods: {
      getFriends() {
        // Récupérer les amis depuis le local storage
        const friends = JSON.parse(localStorage.getItem("friends"));
        if (friends) {
          this.friends = friends;
        }
      },
    },
  };
  </script>
  