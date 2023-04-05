<template>
    <div style="height: 80vh" class="d-flex align-items-center justify-content-center">
       effefef <font-awesome-icon :icon="['fas', 'chess-king']" />
        <div class="border mx-auto">
            <div v-for="(row, index) in board" :key="`board-row-${index}`">
                <div
                    v-for="cell in row" :key="cell"
                    :class="{'board-item': true, 'black': getCellColor(index, cell) === 'black', 'orange': getCellColor(index, cell) === 'orange' }"
                >
                    <div
                        v-if="cell === player_1_moves.position_roi || cell === player_2_moves.position_roi">
                        <span v-if="cell === player_1_moves.position_roi" class="text-white"><font-awesome-icon :icon="['fas', 'chess-king']" size="2x" /></span>
                        <span v-if="cell === player_2_moves.position_roi" class="text-dark"><font-awesome-icon :icon="['fas', 'chess-king']" size="2x" /></span>
                    </div>

                    <div
                        v-else-if="cell === player_1_moves.position_reine || cell === player_2_moves.position_reine">
                        <img src="../../../assets/images/roi.png" alt="">
                    </div>

                    <div
                        v-else-if="player_2_moves.position_tours.includes(cell) || player_1_moves.position_tours.includes(cell)">
                        <img src="../../../assets/images/roi.png" alt="">
                    </div>

                    <div
                        v-else-if="player_2_moves.position_pions.includes(cell) || player_1_moves.position_pions.includes(cell)">
                        <img src="../../../assets/images/roi.png" alt="">
                    </div>

                    <div
                        v-else-if="player_2_moves.position_cavaliers.includes(cell) || player_1_moves.position_cavaliers.includes(cell)">
                        <img src="../../../assets/images/roi.png" alt="">
                    </div>

                    <div
                        v-else-if="player_2_moves.position_fous.includes(cell) || player_1_moves.position_fous.includes(cell)">
                        <img src="../../../assets/images/roi.png" alt="">
                    </div>


                    <div v-else>{{ cell }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BoardComponent",
    data() {
        return {
            chessboard: [
                {piece: "r1", color: "w"},
                {piece: "p1", color: "w"},
            ],
            history: [

            ],


        }
    },
    methods: {
        getCellColor(index, cell) {
            if (index % 2 === 0)
                return cell % 2 === 0 ? "orange" : "black";
            if (index % 2 === 1)
                return cell % 2 !== 0 ? "orange" : "black";
        }

    }
}
</script>

<style scoped>
.board-item {
    width: 80px;
    height: 80px;
    border: 1px solid black;
    display: inline-block;
    text-align: center;
    line-height: 50px;
}

.black {
    background-color: #3B1E0E;
}

.orange {
    background-color: #F4D9B5;
}

.cell img {

    width: 20%;
    height: 40%;
}
</style>
