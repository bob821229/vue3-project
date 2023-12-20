<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';


</script>

<template>
  <Header></Header>
  <div class="index_main">
    <RouterView />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

.index_main {
  padding: 10px;
}

body {
  font-family: 'Noto Sans TC', sans-serif !important;
}
</style>
