<template>
    <div class="pieces-chess">

        <h6><img src="../assets/roi.png" alt="roi" />Le Roi : Une case par coup dans toutes les directions.</h6>
        <h6>La Reine : Peut se déplacer à la verticale, l'horizontale et en diagonale sans limite de nombre de cases.</h6>
        <h6>Le Fou : Peut se déplacer en diagonale selon la couleur définie au début de la partie et sans limite de nombre
            de cases.</h6>

        <h6><img src="../assets/cheval.png" alt="cavalier" />Le Cavalier : </h6>
        <h6>Se déplace en L de différentes façon :</h6>

        <p class="mouv-cavalier">
            - Deux cases en horizontale ou en verticale et une case en direction perpendiculaire.
            <br>
            - Une case en horizontale ou en verticale et deux cases en direction perpendiculaire.
        </p>

        <h6>La Tour : Peut se déplacer horizontalement ou verticalement dans toutes les directions sans limite de nombre
            de cases.</h6>
        <h6>Les Pions : </h6>
        <p class="mouv-pions">
            - Déplace une case à la fois vers l'avant.
            <br>
            - Déplace deux cases vers l'avant s'il n'a pas encore bougé.
            <br>
            - Déplace une case en diagonale pour capturer la pièce de l'adversaire.
        </p>
    </div>
</template>

<script>

export default {
    name: 'PiecesChess',
}

</script>

<style>
img {
    width: 30px;
    height: 30px;
}

.mouv-cavalier {
    text-align: center;
}

.mouv-pions {
    text-align: center;
}
</style>