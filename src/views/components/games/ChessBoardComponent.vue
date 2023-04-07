<template>
    <div style="min-height: 80vh" class="container-fluid px-0 mx-0">
        <div v-if="!win" class="container-fluid d-flex align-items-center justify-content-center border">
            <div class="col grid-container">
                <div class="grid-row">
                    <div class="grid-header"></div>
                    <div v-for="(y, yIndex) in y_axe" :key="yIndex" class="grid-header">{{ y }}</div>
                </div>
                <div v-for="(row, xIndex) in board" :key="xIndex" class="grid-row">
                    <div class="grid-header">{{ x_axe[xIndex] }}</div>
                    <div
                        v-for="(cell, yIndex) in row" :key="yIndex"
                        class="grid-cell" :class="{ 'grid-cell-black': (xIndex + yIndex) % 2 === 1 }"
                        @dragstart="dragPawn(xIndex, y_axe[yIndex], $event)"
                        @drop="dropPawn(xIndex, y_axe[yIndex], $event)"
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
            <div class="col-4 d-flex align-items-center justify-content-around p-5">
                <div class="col">
                    <h5> {{ user_1.pseudo }} </h5>
                    <div v-for="(move, index) in first_player_history" :key="index">
                        {{ move }}
                    </div>
                </div>
                <div class="col">
                    <h5> {{ user_2.pseudo }} </h5>
                    <div v-for="(move, index) in second_player_history" :key="index">
                        {{ move }}
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="col-10 top-0 bg-dark">
            <div class="col-7 text-center">
                <h2>Le joueur {{ currentPlayer }} a capturé le roi</h2>
                <button class="btn btn-lg btn-outline-light">Rejouer la partie</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {CellType, GameSocketEmitType} from "@/types/chess";
import GameService from '@/services/Game.service';
import socket from "@/socketIo";

export default defineComponent({
    name: "ChessBoardComponent",
    data() {
        return {
            y_axe: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''],
            x_axe: [1, 2, 3, 4, 5, 6, 7, 8],
            board: [] as CellType[][],
            currentPlayer: "w",
            success: false,
            win: false,
            user_1: {},
            user_2: {},
            first_player_history: [] as string[],
            second_player_history: [] as string[],
        };
    },
    methods: {

        /**
         * @description Init the board
         */
        initBoard() {
            this.board = GameService.getBoard();
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
                        this.win = true;
                        return;
                    }
                    this.allPawnMovement(oldCell, newCell);
                }

            }
        },

        emitSocket(pieceName: string, oldCell: CellType, newCell: CellType) {
            socket.emit("movePiece", {
                pieceName: pieceName,
                board: this.board,
                oldCell: oldCell,
                newCell: newCell,
                currentPlayer: this.currentPlayer
            });
        },

        /**
         * @description Move a pawn on the board using pawn rules (https://en.wikipedia.org/wiki/Pawn_(chess))
         * @param oldCell
         * @param newCell
         */
        allPawnMovement(oldCell: CellType, newCell: CellType) {
            switch (oldCell.piece?.symbol) {
                case 'p':
                    this.emitSocket("pawn", oldCell, newCell);
                    if (this.success)
                        this.pawnMovement(oldCell, newCell);
                    break;
                case 'r':
                    this.emitSocket("rook", oldCell, newCell);
                    if (this.success)
                        this.rookMovement(oldCell, newCell);
                    break;
                case 'n':
                    this.emitSocket("knight", oldCell, newCell);
                    if (this.success)
                        this.knightMovement(oldCell, newCell);
                    break;
                case 'b':
                    this.emitSocket("bishop", oldCell, newCell);
                    if (this.success)
                        this.bishopMovement(oldCell, newCell);
                    break;
                case 'q':
                    this.emitSocket("queen", oldCell, newCell);
                    if (this.success)
                        this.queenMovement(oldCell, newCell);
                    break;
                case 'k':
                    this.emitSocket("king", oldCell, newCell);
                    if (this.success)
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
            if (oldCell.piece && newCell.piece?.color !== oldCell.piece.color) {
                this.board[newCell.x][this.y_axe.indexOf(newCell.y)].piece = oldCell.piece;
                newCell.piece = oldCell.piece;
                oldCell.piece = null;
            }
        },

        /**
         * @description Toggle the player turn
         */
        togglePlayerTurn() {
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
            const success = GameService.movePawn(this.board, oldCell, newCell, this.currentPlayer);

            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

        rookMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.moveRook(this.board, oldCell, newCell, this.currentPlayer);

            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

        knightMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.moveKnight(this.board, oldCell, newCell, this.currentPlayer);

            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

        bishopMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.moveBishop(this.board, oldCell, newCell, this.currentPlayer);

            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

        queenMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.moveQueen(this.board, oldCell, newCell, this.currentPlayer);

            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

        kingMovement(oldCell: CellType, newCell: CellType) {
            const success = GameService.moveKing(this.board, oldCell, newCell, this.currentPlayer);
            if (success) {
                this.movePiece(oldCell, newCell);
                this.togglePlayerTurn();
            }
        },

    },
    mounted() {
        if (this.board.length === 0) {
            console.log("Board is empty, initializing board");
            this.initBoard();
        }
        socket.on("movePiece", (newBoard: GameSocketEmitType) => {
            console.log("Position data received from server:", newBoard);
            this.board = newBoard.board;
            this.currentPlayer = newBoard.currentPlayer;
            if (newBoard.shot) {
                if (this.currentPlayer === 'b') {
                    this.first_player_history.push(newBoard.shot);
                } else {
                    this.second_player_history.push(newBoard.shot);
                }
            }
        });
        socket.emit("getAuthUser");
        socket.on("getAuthUser", (users) => {
            console.log("Position data received from server:", users);

            this.user_1 = users[0];
            this.user_2 = users[1];
        });
    },
});
</script>

<style scoped>
/*.grid-container {*/
/*    display: flex;*/
/*    flex-direction: column;*/
/*}*/

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
