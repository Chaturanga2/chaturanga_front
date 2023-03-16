<template>
    <div class="bg-white text-dark">
        <HeaderComponent />
        <div style="min-height: 88.5vh" class="container-fluid px-0 m-0">
            <RouterView />

        </div>
        <FooterComponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/views/components/templates/HeaderComponent.vue";
import FooterComponent from "@/views/components/templates/FooterComponent.vue";



export default defineComponent({
    name: "LayoutView",
    components: { FooterComponent, HeaderComponent },
});
</script>

<style scoped></style>
