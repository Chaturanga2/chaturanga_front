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


export default defineComponent({
    name: 'PiecesChessView',
    data() {
        return {
            rules: [
                {
                    name: "Le Roi",
                    description: "Une case par coup dans toutes les directions.",
                    image: require("@/assets/images/roi.png")
                },
                {
                    name: "Reine",
                    description: "Peut se déplacer à la verticale, l'horizontale et en diagonale sans limite de nombre de cases.",
                    image: require("@/assets/images/roi.png")
                },
                {
                    name: "Fou",
                    description: "Peut se déplacer en diagonale selon la couleur définie au début de la partie et sans limite de nombre de cases.",
                    image: require("@/assets/images/roi.png")
                },
                {
                    name: "Cavalier",
                    description: "Se déplace en L de différentes façon : \n" +
                        "- Deux cases en horizontale ou en verticale et une case en direction perpendiculaire. \n" +
                        "- Une case en horizontale ou en verticale et deux cases en direction perpendiculaire.",
                    image: require("@/assets/images/roi.png")
                },
                {
                    name: "Tour",
                    description: "Peut se déplacer horizontalement ou verticalement dans toutes les directions sans limite de nombre de cases.",
                    image: require("@/assets/images/roi.png")
                },
                {
                    name: "Pion",
                    description: "- Déplace une case à la fois vers l'avant. \n" +
                        "- Déplace deux cases vers l'avant s'il n'a pas encore bougé. \n" +
                        "- Déplace une case en diagonale pour capturer la pièce de l'adversaire.",
                    image: require("@/assets/images/roi.png")
                }
            ]
        }
    },
});

</script>

<style>
</style>
