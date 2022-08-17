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
              .answer__text {{ state.answer }}

</template>

<script setup lang="ts">
interface Props{
  receiveMessage: string;
}

const props = withDefaults(defineProps<Props>(), {
  receiveMessage: ''
})

const answerStore = useAnswerStore()
const state = answerStore.state
// setupでthisは使えない。そこで、propで渡して、watchで値の変更を検知したら、setAnswerで更新して、リアクティブになるようにした。
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
}

</style>