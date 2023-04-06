import { reactive } from "vue";
import { io } from "socket.io-client";
import {Server} from "socket.io";

export const state = reactive({
    connected: false,
    fooEvents: [],
    barEvents: []
});



export const socket = io('http://localhost:3000');



socket.on("connect", () => {
    state.connected = true;
});

socket.on("disconnect", () => {
    state.connected = false;
});

socket.on("foo", (...args) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return state.fooEvents.push(args);
});

socket.on("bar", (...args) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return state.barEvents.push(args);
});
