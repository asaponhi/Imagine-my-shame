<template lang="pug">
.t-answerer
  .t-answerer__outer
    .t-answerer__inner
      .t-answerer__title
        h2 回答者ページ

      .t-answerer__contents
        .content
          .content__answer
            .answer
              
            
          

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
.t-answerer{
  width: 100vw;
  height: 100vh;
}

.t-answerer__contents{
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