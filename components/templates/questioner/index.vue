<template lang="pug">
.t-questioner
  .t-questioner__outer
    .t-questioner__inner
      .t-questioner__title
        h2 質問者ページ

      form.t-questioner__contents(method="post" action="/create")
        .content
          .content__input
            .input
              <input type="text" name="msg">
              <input type="submit" value="送信する">
              //- textarea.input__textarea(v-model="inputText" name="textarea" maxlength="500" placeholder="口にするのは難しいあなたの恥や悩みを入力してください。" @keydown.enter.exact="keyDownEnter" @keyup.enter.exact="keyUpEnter")
              //- button.input__submit(type="submit") 送信
              //- button.input__submit(type="button" @click="sendMessage()") 送信
          

</template>

<script setup lang="ts">

// const submit()=>{
//   const { data: message } = await useFetch('/api/', {
//     method: 'POST',
//     body: 'this.inputText',
//   });
// }

</script>

<script lang="ts">
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
    // async sendMessage() {
    //   await $fetch('/api/message', {
    //     method: 'POST',
    //     body: this.inputText
    //   });
    //   console.log("送信")
    // }
    sendMessage() {
      // send
      const { data: message } =  useFetch('/api/message', {
        method: 'POST',
        body: 'this.inputText'
        // body: this.inputText
      });
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