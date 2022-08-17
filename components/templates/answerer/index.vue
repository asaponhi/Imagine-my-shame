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
              //- .answer__text {{ answerStore.getState(receiveMessage).answer }}
              .answer__text {{ state.answer }}
              //- <button @click="answerStore.setAnswer('aaa')">setAnswer</button>

</template>

<script setup lang="ts">
interface Props{
  receiveMessage: string;
}

const props = withDefaults(defineProps<Props>(), {
  receiveMessage: ''
})

const answerStore = useAnswerStore()
// console.log("props",props.receiveMessage)
// answerStore.setAnswer(props.receiveMessage)
const state = answerStore.state

watch(() => props.receiveMessage, () => {
  answerStore.setAnswer(props.receiveMessage)
})



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