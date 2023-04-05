<template>
    <div>
        <div v-for="(row, xIndex) in $parent.board" :key="xIndex" class="grid-row">
            <div class="grid-header">{{ $parent.x_axe[xIndex] }}</div>
            <div v-for="(cell, yIndex) in row" :key="yIndex" class="grid-cell" :class="{ 'grid-cell-black': (xIndex + yIndex) % 2 === 1 }" v-html="getCell(xIndex, yIndex, cell)"></div>
            <div class="grid-header">{{ $parent.x_axe[xIndex] }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChessCellComponent",
    data() {
        return {
            img: require('@/assets/pions/bishop_b.png')
        }
    },
    methods: {
        getCell(xIndex, yIndex, cell) {
            if ((xIndex + yIndex) % 2 === 0) {
                return `<div>${cell}</div>`;
            }
            return `<div class=""><img src="${require('@/assets/pions/bishop_w.png')}" alt="bishop_b"></div>`;
        }
    }
}
</script>

<style scoped>
.grid-row {
    display: flex;
}

.grid-header {
    width: 80px;
    height: 80px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.grid-cell {
    width: 80px;
    height: 80px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0d9b5;
}

.grid-cell-black {
    background-color: #779556;
    color: white;
}
</style>
