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
const answerStore = useAnswerStore()
const state = answerStore.state

interface Props{
  receiveMessage: string;
}
const props = withDefaults(defineProps<Props>(), {
  receiveMessage: ''
})

const placeholder: string = '出題者の入力したテキストが表示されます'
localStorage.saveKey != null ? answerStore.setAnswer(localStorage.saveKey) : answerStore.setAnswer(placeholder)

// setupでthisは使えない。そこで、propで渡して、watchで値の変更を検知したら、setAnswerで更新して、リアクティブになるようにした。
watch(() => props.receiveMessage, () => {
  answerStore.setAnswer(props.receiveMessage)
  // ブラウザをリロードしても値を保持できるように。
  localStorage.saveKey = props.receiveMessage
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