<template lang="pug">
.t-select-player-modal(v-if="modalFlag")
  .t-select-player-modal__outer
    .t-select-player-modal__inner
      .t-select-player-modal__title
        h2 質問者か回答者を選択してください
      .t-select-player-modal__contents
        button.content(@click="controlModal('questioner')")
          .content__inner
            .content__title
              h3 質問者

        button.content(@click="controlModal('answerer')")
          .content__inner
            .content__title
              h3 回答者


</template>

<script lang="ts">
export default {
  data() {
    return {
      selectValue: '',
      modalFlag: true
    }
  },
  computes: {

  },
  mounted() {
    
  },
  methods: {
    controlModal(value) {
      this.selectValue = value
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
</style>