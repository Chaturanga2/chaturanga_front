<template>
  <div class="profileContainer my-5">
    <div class="col-md-3 profileMenu">
      <div class="list-group">
        <h2>{{ user.email }}</h2>
        <button type="button" class="list-group-item list-group-item-action" @click="currentView = 'my-information'">My information</button>
        <button type="button" class="list-group-item list-group-item-action" @click="currentView = 'my-friends'">My friends</button>
        <button type="button" class="list-group-item list-group-item-action" @click="currentView = 'my-statistics'">My statistics</button>
      </div>
    </div>
    <div class="col-md-7 profileInfo">
      <component :is="currentView" :user="user" />
    </div>
  </div>
</template>

<script>
import MyInformation from "../../components/myProfile/MyInformation.vue";
import MyFriends from "../../components/myProfile/MyFriends.vue";
import MyStatistics from "../../components/myProfile/MyStatistics.vue";

export default {
  name: "MyAccountView",
  components: {
    MyInformation,
    MyFriends,
    MyStatistics
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      currentView: "my-information"
    };
  },
  methods: {
    editUser() {
      this.$router.push("/my-account/edit");
    }
  }
};
</script>

<style scoped>
.profileContainer{
  display: flex;
  flex-wrap: wrap;
  height: 100vh; /* Ajouté pour s'étendre sur toute la hauteur de la fenêtre */
  align-items: center;
}
.list-group {
  width: 100%;
}

.list-group-item-action {
  cursor: pointer;
}

.card-img-top {
  max-height: 300px;
  object-fit: cover;
}

.profileMenu{
  background-color: #E0E0E0;
  margin: 0px 40px;
  padding: 20px;
}

.list-group-item{
  background: none;
  border: none;
}

.profileInfo{
  background-color: #E0E0E0;
  padding: 15px;
  margin: 20px 0px;
}
</style>