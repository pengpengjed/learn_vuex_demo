<template>
  <div class="home"></div>
</template>

<script setup>
import { useStore } from "vuex";


const store = useStore()
store.dispatch('fetchHomeMultidataAction').then(res => {
  console.log(res)
})

</script>
<style scoped lang='less'>
</style>