<template>
<div class="container">
    <div class="col">
        <ChessBoardComponent />
    </div>
</div>
</template>

<script>
import ChessBoardComponent from "@/views/components/games/ChessBoardComponent.vue";

export default {
    name: "GameView",
    components: {ChessBoardComponent}
}
</script>

<style scoped>

</style>
