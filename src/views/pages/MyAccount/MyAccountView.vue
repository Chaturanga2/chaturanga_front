<template>
  <div class="row my-5">
    <div class="col-md-3">
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action" @click="currentView = 'my-information'">My information</button>
        <button type="button" class="list-group-item list-group-item-action" @click="currentView = 'my-friends'">My friends</button>
        <button type="button" class="list-group-item list-group-item-action" @click="currentView = 'my-statistics'">My statistics</button>
      </div>
    </div>
    <div class="col-md-9">
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
</style>