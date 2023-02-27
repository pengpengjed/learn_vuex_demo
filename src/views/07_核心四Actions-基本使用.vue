<template>
  <div class="home">
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <button @click="counterBtnClick">发起action修改counter</button>
    <h2>name: {{ $store.state.name }}</h2>
    <button @click="nameBtnClick">发起action修改name</button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";


const store = useStore();
function counterBtnClick () {
  store.dispatch('incrementAction')
}
function nameBtnClick () {
  store.dispatch('changeNameAciton', 'aaa')
}
</script>
<style scoped lang="less"></style>
