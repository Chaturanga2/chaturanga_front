<template>
    <div class="container">
        <h1 class="h1 my-3 text-center">{{ t("game.title") }}</h1>
        <h2 class="h2 mb-1">{{ t("game.subTitle") }}</h2>
        <p class="mb-4">{{ t("game.gameRules") }}</p>
        <h2 class="h2 mb-1">{{ t("game.endGame") }}</h2>
        <p class="mb-4">{{ t("game.endGameRules") }}</p>
        
        <h2>{{ t("game.pieces.all") }}</h2>
        <PiecesChess />
    </div>
</template>

<script lang="ts">

import PiecesChess from '@/components/PiecesChess.vue';
import { useTranslation } from '@/utilities/useTranslation';

export default {
    setup() {
        const { t } = useTranslation();
        return { t };
    },
    name: 'ChessRulesView',
    components: {
        PiecesChess
    }
}


</script>

<style></style>

