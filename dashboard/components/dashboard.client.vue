<script setup lang="ts">
import { io } from "socket.io-client";

// ES modules
const socket = io("ws://localhost:3001", {
  reconnectionDelayMax: 10000
});
socket.on("connect", () => {
  console.log("connected!!!")
});
socket.on("status", () => {
  console.log("status!!!")
});
socket.on("error", () => {
  console.log("error!!!")
});
console.log("HERE!!!", socket)
</script>
<template>
    <div>
      dashboard
    </div>
</template>
  