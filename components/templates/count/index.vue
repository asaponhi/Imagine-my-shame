<template lang="pug">
.t-count
  .t-count__outer
    .t-count__inner
      .t-count__title
        h3 countページ

      .t-count__contents
        .content
          <div>{{ state.count }}</div>
          <button @click="counterStore.countUp">countUp</button>

          <button @click="counterStore.setCount(0)">reset</button>


</template>

<script setup lang="ts">
const counterStore = useCounterStore();
const { state } = counterStore;
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
.t-count{
  width: 100vw;
  height: 100vh;
}


</style>