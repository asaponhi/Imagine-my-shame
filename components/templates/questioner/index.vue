<template lang="pug">
.t-questioner
  .t-questioner__outer
    .t-questioner__inner
      .t-questioner__title
        h2 質問者ページ

      .t-questioner__contents
        .content
          .content__input
            .input
              textarea.input__textarea(v-model="inputText" name="textarea" maxlength="500" placeholder="口にするのは難しいあなたの恥や悩みを入力してください。" @keydown.enter.exact="keyDownEnter" @keyup.enter.exact="keyUpEnter")
              button.input__submit(type="submit" @click="sendMessage()") 送信
          

</template>

<script>
export default {
  data() {
    return {
      inputText: '',
    }
  },
  computes: {

  },
  mounted() {
    
  },
  methods: {
    sendMessage() {
      // send
      console.log("送信")
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