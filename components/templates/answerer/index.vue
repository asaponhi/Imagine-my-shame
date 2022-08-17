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
              //- state
              .answer__text {{ state.answer }}
              //- <button @click="answerStore.setAnswer('aaa')">setAnswer</button>

</template>

<script setup lang="ts">
const answerStore = useAnswerStore()
const state = answerStore.state
</script>

<script lang="ts">
export default {
  data() {
    return {
    }
  },
  computes: {

  },
  mounted() {
  },
  methods: {
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