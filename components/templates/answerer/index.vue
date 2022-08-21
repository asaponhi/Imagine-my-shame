<template lang="pug">
.t-answerer
  .t-answerer__outer
    .t-answerer__inner
      .t-answerer__title
        h3 回答者ページ

      .t-answerer__contents
        .content
          .content__default {{ placeholder }}
          .content__answer(v-show="openFlag")
            .answer
              .answer__text {{ state.answer }}
          button.content__button(@click="openFlagControl(true)" v-if="openFlag === false") 答えを見る

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

const placeholder: string = '出題者の入力したテキストがここに表示されます'
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
      openFlag:false
    }
  },
  computes: {

  },
  mounted() {
  },
  methods: {
    openFlagControl(flag) {
      this.openFlag = flag
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
}

</style>