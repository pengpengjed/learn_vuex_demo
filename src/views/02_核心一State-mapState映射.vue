<template>
  <button @click="incrementLevel">修改level</button>
  <!-- 1.在模板中直接使用多个状态 -->
  <h2>name: {{ $store.state.name }}</h2>
  <h2>level: {{ $store.state.level }}</h2>
  <h2>avatar: {{ $store.state.avatarURL }}</h2>

  <!-- 5.setup计算属性(映射状态: 对象语法) -->
  <h2>name: {{ name }}</h2>
  <h2>level: {{ level }}</h2>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['name', 'level', 'avatarURL'])
  }
};
</script>

<script setup>
import { toRefs } from 'vue';
import { mapState, useStore } from 'vuex';

const store = useStore();
const { name, level } = toRefs(store.state);

function incrementLevel() {
  store.state.level++;
}
</script>

<style scoped></style>
