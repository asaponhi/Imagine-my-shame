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
const answerStore = useAnswerStore()

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
      // socket: new WebSocket("ws://localhost:3030"),
      socket: new WebSocket("wss://cloud.achex.ca/imagine-my-shame-1"),
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
        this.socket.send(JSON.stringify({ "auth": "user", "password": "1234" }));
        // 受信 
        /*
        PART1 こっちで上手く行く時とエラー出る時がある。その時はPART２を動かす。
        */ 
        this.socket.onmessage = (e) => {
          // auth時のレスポンスもmessageで来るので弾いておきます
          let resData = JSON.parse(e.data)
          if (resData.auth =='OK') return
          if (resData.action = 'send_message') {
            console.log("resData", resData)
            this.receiveMessage = resData.message
          }
        }
        /*
        PART2 こっちで上手く行く時とエラー出る時がある。その時はPART1を動かす。
        */ 
        // this.socket.onmessage = (e) => {
        //   const blobToJson = async () => {
        //     const blobText = await fileReader(e.data);
        //     return JSON.parse(blobText);
        //   };
        //   blobToJson().then(
        //     (resData) => {
        //       if (resData.action = 'send_message') {
        //         this.receiveMessage = resData.message
        //       }
        //     }, (error) => {
        //       console.log("promise error", error.message)
        //     })
        // }
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