<template lang="pug">
.t-questioner
  .t-questioner__outer
    .t-questioner__inner
      .t-questioner__title
        h2 質問者ページ

      form.t-questioner__contents(method="post")
        .content
          .content__input
            .input
              textarea.input__textarea(v-model="inputText" name="textarea" maxlength="500" placeholder="入力してください。" @keydown.enter.exact="keyDownEnter" @keyup.enter.exact="keyUpEnter")
              //- textarea.input__textarea(v-model="inputText" name="textarea" maxlength="500" placeholder="口にするのは難しいあなたの恥や悩みを入力してください。" @keydown.enter.exact="keyDownEnter" @keyup.enter.exact="keyUpEnter")
              button.input__submit(type="button" @click="onSendMessage()") 送信
          

</template>

<script lang="ts">
// import w3cwebsocket from 'websocket'
// const WebSocket = w3cwebsocket

export default {
  data() {
    return {
      // socket
      socket: new WebSocket("ws://localhost:3030"),
      inputText: '',
    }
  },
  computes: {

  },
  mounted() {
    
  },
  methods: {
    onSendMessage() {
      this.socket.send(JSON.stringify({
        'action': 'send_message',
        'message': this.inputText
      }))
      this.inputText =""
    }
  }
}
</script>

<style lang="scss" scoped>
.t-questioner{
  width: 100vw;
  height: 100vh;
}

.t-questioner__contents{
  .content__input{
    width:60%;
    height:20%;

    .input__textarea{
      width:100%;
      height:100%;
    }

    // .input__submit{
    //   width
    // }
  }

}

</style>