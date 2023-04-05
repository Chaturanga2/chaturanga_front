<template>
    <div class="grid-container">
        <div class="grid-row">
            <div class="grid-header"></div>
            <div v-for="(y, yIndex) in y_axe" :key="yIndex" class="grid-header">{{ y }}</div>
        </div>
        <div v-for="(row, xIndex) in board" :key="xIndex" class="grid-row">
            <div class="grid-header">{{ x_axe[xIndex] }}</div>
            <div
                v-for="(cell, yIndex) in row" :key="yIndex"
                class="grid-cell" :class="{ 'grid-cell-black': (xIndex + yIndex) % 2 === 1 }"
                @dragstart="dragPawn(xIndex, y_axe[yIndex], $event)" @drop="dropPawn(xIndex, y_axe[yIndex], $event)"
                @dragover.prevent
            >
                <img class="w-100 h-100" v-if="cell.piece" :src="cell.piece.image" alt="Piece"/>
            </div>
            <div class="grid-header">{{ x_axe[xIndex] }}</div>
        </div>

        <div class="grid-row">
            <div class="grid-header"></div>
            <div v-for="(y, yIndex) in y_axe" :key="yIndex" class="grid-header">{{ y }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {CellType} from "@/types/chess";
import GameService from '@/services/Game.service';
export default defineComponent({
    name: "ChessBoardComponent",
    data() {
        return {
            y_axe: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
            x_axe: [1, 2, 3, 4, 5, 6, 7, 8],
            board: [] as CellType[][],
            currentPlayer: "w",
        };
    },
    methods: {

        /**
         * @description Init the board
         */
        initBoard() {
            this.board = GameService.getBoard() ;
            console.log(this.board)
        },

        /**
         * @description Drag a pawn on the board
         * @param x
         * @param y
         * @param event
         */
        dragPawn(x: number, y: string, event: DragEvent) {
            const data = JSON.stringify({x, y});
            event.dataTransfer?.setData('text/plain', data);
        },

        /**
         * @description Drop a pawn on the board
         * @param x
         * @param y
         * @param event
         */
        dropPawn(x: number, y: string, event: DragEvent) {
            const data = event.dataTransfer?.getData('text/plain');
            if (data) {
                const {x: oldX, y: oldY} = JSON.parse(data);
                const oldCell = this.board[oldX].find(cell => cell.y === oldY);
                const newCell = this.board[x].find(cell => cell.y === y);
                if (oldCell && newCell) {
                    if (newCell.piece?.symbol === 'k') {
                        alert('You win !');
                        return;
                    }
                    this.allPawnMovement(oldCell, newCell);
                }

            }
        },

        /**
         * @description Move a pawn on the board using pawn rules (https://en.wikipedia.org/wiki/Pawn_(chess))
         * @param oldCell
         * @param newCell
         */
        allPawnMovement(oldCell: CellType, newCell: CellType) {
            switch (oldCell.piece?.symbol) {
                case 'p':
                    this.pawnMovement(oldCell, newCell);
                    break;
                case 'r':
                    this.rookMovement(oldCell, newCell);
                    break;
                case 'n':
                    this.knightMovement(oldCell, newCell);
                    break;
                case 'b':
                    this.bishopMovement(oldCell, newCell);
                    break;
                case 'q':
                    this.queenMovement(oldCell, newCell);
                    break;
                case 'k':
                    this.kingMovement(oldCell, newCell);
                    break;
            }
        },

        /**
         * @description Move a piece
         * @param oldCell
         * @param newCell
         * @rule : A piece cannot move to a square that is occupied by a friendly piece.
         */
        movePiece(oldCell: CellType, newCell: CellType) {
            console.log(oldCell.piece?.symbol, newCell.piece?.symbol)
            if (oldCell.piece && newCell.piece?.color !== oldCell.piece.color) {

                newCell.piece = oldCell.piece;
                oldCell.piece = null;
            }
        },

        /**
         * @description Toggle the player turn
         */
        togglePlayerTurn() {
            // const success = GameService.isKingInCheck(this.board, this.currentPlayer);
            // console.log(success);
            if (this.currentPlayer === 'w') {
                this.currentPlayer = 'b';
                // this.moveAI();
            } else {
                this.currentPlayer = 'w';
            }
        },

        /**
         * @description Move a pawn on the board using pawn rules (https://en.wikipedia.org/wiki/Pawn_(chess))
         * @param oldCell
         * @param newCell
         */
        pawnMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.movePawn(this.board,oldCell, newCell,  this.currentPlayer);

            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

        rookMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.moveRook(this.board,oldCell, newCell,  this.currentPlayer);

            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

        knightMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.moveKnight(this.board,oldCell, newCell,  this.currentPlayer);

            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

        bishopMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.moveBishop(this.board,oldCell, newCell,  this.currentPlayer);

            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

        queenMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.moveQueen(this.board,oldCell, newCell,  this.currentPlayer);

            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

        kingMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.moveKing(this.board,oldCell, newCell,  this.currentPlayer);
            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },


    },
    mounted() {
        this.initBoard();
    }
});
</script>

<style scoped>
.grid-container {
    display: flex;
    flex-direction: column;
}

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
