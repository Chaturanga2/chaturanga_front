<template>
    <div class="">
        <div
            class="d-flex align-items-center justify-content-start"
            v-for="(rule, index) in rules"
            :key="`rules_${index}`"
        >
            <img width="30" height="30" :src="rule.image" alt=""/>
            <div class="ms-3">
                <p>{{ rule.name }} : {{ rule.description }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { useTranslation } from "@/utilities/useTranslation";


export default defineComponent({
    name: 'PiecesChessView',
    data() {
        const { t } = useTranslation();
        return {
            rules: [
                {
                    name: t('game.pieces.king.name'),
                    description: t('game.pieces.king.desc'),
                    image: require("@/assets/roi.png")
                },
                {
                    name: t('game.pieces.queen.name'),
                    description: t('game.pieces.queen.desc'),
                    image: require("@/assets/roi.png")
                },
                {
                    name: t('game.pieces.bishop.name'),
                    description: t('game.pieces.bishop.desc'),
                    image: require("@/assets/roi.png")
                },
                {
                    name: t('game.pieces.knight.name'),
                    description: t('game.pieces.knight.desc'),
                    image: require("@/assets/roi.png")
                },
                {
                    name: t('game.pieces.rook.name'),
                    description: t('game.pieces.rook.desc'),
                    image: require("@/assets/roi.png")
                },
                {
                    name: t('game.pieces.pawn.name'),
                    description: t('game.pieces.pawn.desc'),
                    image: require("@/assets/roi.png")
                }
            ]
        }
    },
});

</script>

<style>
</style>
