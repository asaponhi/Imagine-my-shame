<template lang="pug">
.p-imagine-my-shame
  .p-imagine-my-shame__outer
    .p-imagine-my-shame__inner
      .p-imagine-my-shame__contents
        .content.content--select-player-modal
          TemplatesSelectPlayerModal
        .content.content--questioner(v-show="state.questionerFlag")
          TemplatesQuestioner
        .content.content--answerer(v-show="state.answererFlag")
          TemplatesAnswerer(:receiveMessage="receiveMessage")

</template>

<script setup lang="ts">
const controllerStore = useControllerStore()
const state = controllerStore.state
</script>

<script lang="ts">
import fileReader from "~/assets/script/fileReader"

export default {
  components: {

  },
  data() {
    return {
      questionerFlag: true,
      answererFlag: true,
      // socket
      socket: new WebSocket("ws://localhost:3030"),
      receiveMessage: localStorage.saveKey != null ? localStorage.saveKey : ''
    }
  },
  computes: {

  },
  mounted() {
    this.onConnectWebSocket()
  },
  methods: {
    onConnectWebSocket() {
      this.socket.onopen = () => {
        // 受信 
        this.socket.onmessage = (e) => {
          const blobToJson = async () => {
            const blobText = await fileReader(e.data);
            return JSON.parse(blobText);
          };
          blobToJson().then(
            (resData) => {
              if (resData.action = 'send_message') {
                this.receiveMessage = resData.message
              }
            }, (error) => {
              console.log("promise error", error.message)
            })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.p-imagine-my-shame{
  width: 100vw;
  height: 100vh;
}
</style>