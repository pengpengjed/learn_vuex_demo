<template>
  <div class="app">
    <h2>doubleCounter: {{doubleCounter}}</h2>
    <h2>totalAge: {{totalAge}}</h2>

    <h2>id-113的朋友信息: {{getFriendById(113)}}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['doubleCounter', 'totalAge']),
    ...mapGetters(['getFriendById'])
  }
};
</script>

<script setup>
  import { mapGetters, useStore } from 'vuex'

  const store = useStore()

  // 使用mapGetters
  const {message} = mapGetters(["message"])
  console.log(message)
</script>
<style scoped lang="less"></style>
