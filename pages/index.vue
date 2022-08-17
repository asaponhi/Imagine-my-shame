<template lang="pug">
.p-imagine-my-shame
  .p-imagine-my-shame__outer
    .p-imagine-my-shame__inner
      .p-imagine-my-shame__contents
        .content.content--select-player-modal
          TemplatesSelectPlayerModal
        .content.content--questioner(v-if="questionerFlag")
          TemplatesQuestioner
        .content.content--answerer(v-if="answererFlag")
          TemplatesAnswerer(:receiveMessage="receiveMessage")

</template>

<script setup lang="ts">
</script>

<script lang="ts">
export default {
  components: {

  },
  data() {
    return {
      questionerFlag: true,
      answererFlag: true,
      // socket
      socket: new WebSocket("ws://localhost:3030"),
      receiveMessage: ''
    }
  },
  computes: {

  },
  mounted() {
    this.onConnectWebSocket()
    this.receiveMessage = 'test'
  },
  methods: {
    onConnectWebSocket() {
      this.socket.onopen = () => {
        // 受信 
        this.socket.onmessage = (e) => {
          let resData = JSON.parse(e.data)
          console.log("resData", resData)
          if (resData.action = 'send_message') {
            this.receiveMessage = resData.message
          }
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