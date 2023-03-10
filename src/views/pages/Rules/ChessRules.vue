<template>
  <div class="game-rules">
    <h1>Règles du jeu d'échecs</h1>
    <h2>Règles de base</h2>
    <p>Le jeu d'échecs se joue sur un plateau de 64 cases, alternativement claires et foncées, appelées les cases blanches
      et noires. Chaque joueur commence la partie avec 16 pièces: un roi, une dame, deux tours, deux fous, deux cavaliers
      et huit pions.</p>
    <h2>Fin de partie</h2>
    <p>La partie se termine lorsqu'un joueur met en échec et mat le roi adverse, c'est-à-dire que le roi est menacé d'être
      pris sans qu'il ne puisse être sauvé, ou si l'un des joueurs déclare nulle.</p>
    <h2>Les différentes pièces :</h2>
    <PiecesChess></PiecesChess>
  </div>
</template>

<script>
import PiecesChess from '@/components/PiecesChess.vue';

export default {
  components: {
    PiecesChess
  }
}


</script>

<style>
.game-rules {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-size: 18px;
}

h1 {
  font-size: 36px;
  text-align: center;
}

h2 {
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 20px;
}

p {
  line-height: 1.5;
  margin-bottom: 30px;
}
</style>

