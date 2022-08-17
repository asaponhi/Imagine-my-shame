<template lang="pug">
.p-imagine-my-shame
  .p-imagine-my-shame__outer
    .p-imagine-my-shame__inner
      .p-imagine-my-shame__contents
        .content.content--select-player-modal
          TemplatesSelectPlayerModal
        .content.content--questioner(v-if="questionerFlag")
          TemplatesQuestioner
        .content.content--answerer(v-if="answererFlag")
          TemplatesAnswerer
        //- test
        .content.content--count
          TemplatesCount

</template>

<script setup lang="ts">
// const counterStore = useCounterStore();
// const { state } = counterStore;
</script>

<script lang="ts">

export default {
  components: {

  },
  data() {
    return {
      questionerFlag: true,
      answererFlag: true,
    }
  },
  computes: {

  },
  mounted() {
    // console.log("selectPlayerModal", selectPlayerModal)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.p-imagine-my-shame{
  width: 100vw;
  height: 100vh;
}
</style>