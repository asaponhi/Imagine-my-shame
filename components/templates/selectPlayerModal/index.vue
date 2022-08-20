<template lang="pug">
.t-select-player-modal(v-if="modalFlag")
  .t-select-player-modal__outer
    .t-select-player-modal__inner
      .t-select-player-modal__title
        h3 出題者か回答者を選択してください
      .t-select-player-modal__contents
        //- button.content(@click="controllerStore.setQuestionerController(true);modalClose()")
        .content
          .content__inner
            button.content__button(@click="controllerStore.setQuestionerController(true);modalClose()") 出題者
            //- .content__title
              h3 出題者
        .content
          .content__inner
            button.content__button(@click="controllerStore.setAnswererController(true);modalClose()") 回答者
        //- button.content(@click="controllerStore.setAnswererController(true);modalClose()")
        //-   .content__inner
        //-     .content__title
        //-       h3 回答者


</template>

<script setup lang="ts">
const controllerStore = useControllerStore()
</script>

<script lang="ts">
export default {
  data() {
    return {
      modalFlag: true
    }
  },
  computes: {

  },
  mounted() {

  },
  methods: {
    modalClose() {
      this.modalFlag = false
    }
  }
}
</script>

<style lang="scss" scoped>
.t-select-player-modal{
  width: 100vw;
  height: 100vh;
}
.t-select-player-modal__contents{
  display:flex;
}

.content__button{
  padding:5px;
  border:1px solid black;
}

.content + .content{
  margin-left:15px;
}

</style>