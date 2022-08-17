<template lang="pug">
.p-introduce
  .p-introduce__outer
    .p-introduce__inner
      .p-introduce__title
        h1 CANVAS_2D INTRODUCE

      .p-introduce__contents
        .content
          .content__title 
            h2 {{ data }}
          


</template>

<script setup lang="ts">
const { data } = await useFetch('/api/message')
console.log("answer:", data)
</script>

<script lang="ts">
export default {
  data() {
    return {}
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
</style>