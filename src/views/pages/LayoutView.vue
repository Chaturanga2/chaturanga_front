<template>
  <div class="bg-light text-dark">
    <HeaderComponent class="fixed-top" />
    <div style="min-height: 88.5vh" class="container-fluid px-0 mx-0 pt-5 mt-5">
      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/views/components/templates/HeaderComponent.vue';
import FooterComponent from '@/views/components/templates/FooterComponent.vue';

export default defineComponent({
  name: 'LayoutView',
  components: { HeaderComponent, FooterComponent },
});
</script>

<style scoped></style>
