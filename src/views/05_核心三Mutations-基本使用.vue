<template>
  <div class="app">
    <button @click="changeName">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changeInfo">修改info</button>
    <h2>Store Name {{ $store.state.name }}</h2>
    <h2>Store Level {{ $store.state.level }}</h2>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { CHANGE_INFO } from '@/store/mutation_types';

const store = useStore();
function changeName() {
  store.commit('changeName', 'kobe');
}
function incrementLevel() {
  store.commit('incrementLevel');
}
function changeInfo() {
  store.commit(CHANGE_INFO, {
    name: 'peng',
    level: 88
  });
}
</script>
<style scoped lang="less"></style>
