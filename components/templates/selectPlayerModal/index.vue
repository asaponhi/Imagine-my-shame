<template lang="pug">
.t-select-player-modal(v-if="modalFlag")
  .t-select-player-modal__outer
    .t-select-player-modal__inner
      .t-select-player-modal__title
        h2 質問者か回答者を選択してください
      .t-select-player-modal__contents
        button.content(@click="controllerStore.setQuestionerController(true)")
          .content__inner
            .content__title
              h3 質問者

        button.content(@click="controllerStore.setAnswererController(true)")
          .content__inner
            .content__title
              h3 回答者


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
  }
}
</script>

<style lang="scss" scoped>
.t-select-player-modal{
  width: 100vw;
  height: 100vh;
}
</style>