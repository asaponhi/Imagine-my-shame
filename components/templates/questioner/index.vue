<template lang="pug">
.t-questioner
  .t-questioner__outer
    .t-questioner__inner
      .t-questioner__title
        h3 出題者ページ

      form.t-questioner__contents(method="post")
        .content
          .content__input
            .input
              textarea.input__textarea(v-model="inputText" name="textarea" maxlength="500" placeholder="入力してください。" @keydown.enter.exact="keyDownEnter" @keyup.enter.exact="keyUpEnter")
              //- textarea.input__textarea(v-model="inputText" name="textarea" maxlength="500" placeholder="口にするのは難しいあなたの恥や悩みを入力してください。" @keydown.enter.exact="keyDownEnter" @keyup.enter.exact="keyUpEnter")
              button.input__submit(type="button" @click="onSendMessage()") 送信
          .content__output(v-if="outputFlag")
            .output
              span.output__title あなたが入力した言葉は
              span.output__input-text {{ `"${outputText}"` }}
          

</template>

<script lang="ts">

export default {
  
  data() {
    return {
      // socket
      socket: new WebSocket("ws://localhost:3030"),
      inputText: '',
      outputText: '',
      outputFlag: false
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
      this.outputText = this.inputText
      this.outputFlag = true
      this.inputText = ""
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

    .input__submit{
      padding:5px;
      border: 1px solid black;
    }
  }

  .output{
    font-size: 14px;
  }

}

</style>