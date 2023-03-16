<template>
    <div class="container">
        <h1 class="h1 my-3 text-center">Règles du jeu d'échecs</h1>
        <h2 class="h2 mb-1">Règles de base</h2>
        <p class="mb-4">Le jeu d'échecs se joue sur un plateau de 64 cases, alternativement claires et foncées, appelées les cases
            blanches
            et noires. Chaque joueur commence la partie avec 16 pièces: un roi, une dame, deux tours, deux fous, deux
            cavaliers
            et huit pions.</p>

        <h2 class="h2 mb-1">Fin de partie</h2>
        <p class="mb-4">La partie se termine lorsqu'un joueur met en échec et mat le roi adverse, c'est-à-dire que le roi est menacé
            d'être
            pris sans qu'il ne puisse être sauvé, ou si l'un des joueurs déclare nulle.</p>

        <h2>Les différentes pièces :</h2>
        <PiecesChess />
    </div>
</template>

<script>
import PiecesChess from '@/components/PiecesChess.vue';

export default {
    name: 'ChessRulesView',
    components: {
        PiecesChess
    }
}


</script>

<style>

</style>

