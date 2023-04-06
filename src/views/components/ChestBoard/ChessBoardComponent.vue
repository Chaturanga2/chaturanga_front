<!-- src/components/ChessBoard.vue -->
<template>
    <div>
        <table>
        <tr v-for="(row, rowIndex) in board" :key="rowIndex">
            <td
            v-for="(cell, colIndex) in row"
            :key="colIndex"
            @click="move(rowIndex, colIndex)"
            >
            {{ cell }}
            </td>
        </tr>
        </table>
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import socket from "../../../socketIo";
import { Position } from "../../../types/chestboard/types";
  
  export default defineComponent({
    name: "ChessBoard",
    data() {
      return {
        board: Array(8)
          .fill(null)
          .map(() => Array(8).fill("")),
      };
    },
    methods: {
      move(row: number, col: number) {
        const newPosition: Position = { row, col };
        this.sendPosition(newPosition);
      },
      sendPosition(newPosition: Position) {
        socket.emit("move", newPosition);
      },
      updateBoard(positionData: Position) {
        const { row, col } = positionData;
        this.board[row][col] = "P";
      },
    },
    mounted() {
      socket.on("connect", () => {
        console.log("Connected to server");
  
        socket.on("move", (positionData: Position) => {
          console.log("Position data received from server:", positionData);
          this.updateBoard(positionData);
        });
      });
  
      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });
    },
  });
  </script>
  
  <style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 50px;
    height: 50px;
    text-align: center;
    vertical-align: middle;
  }
  </style>
  