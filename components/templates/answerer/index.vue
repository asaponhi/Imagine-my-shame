<template lang="pug">
.t-answerer
  .t-answerer__outer
    .t-answerer__inner
      .t-answerer__title
        h3 回答者ページ

      .t-answerer__contents
        .content
          .content__default(v-html="placeholder")
          .content__answer
            .answer
              //- .answer__default(v-html="placeholder" v-show="state.openFlag === false")
              .answer__text(v-show="state.openFlag") {{ state.answer }}
          button.content__button(@click="answerStore.setOpenFlag(true)" v-if="state.openFlag === false") 答えを見る

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

const placeholder: string = '会話をして答えを当ててください。<br>”答えを見る”ボタンを押すと、出題者の入力したテキストが下に表示されます。'
localStorage.saveKey != null ? answerStore.setAnswer(localStorage.saveKey) : answerStore.setAnswer(placeholder)

// setupでthisは使えない。そこで、propで渡して、watchで値の変更を検知したら、setAnswerで更新して、リアクティブになるようにした。
watch(() => props.receiveMessage, () => {
  answerStore.setAnswer(props.receiveMessage)
  answerStore.setOpenFlag(false)
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

.content__answer{
  padding:50px;
  border:1px solid black;
  .answer{
    .answer__text{
      @include font-set-pc(30,15,15,600)
    }
  }
}

</style>