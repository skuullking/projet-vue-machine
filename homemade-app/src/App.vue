<template>
  <div class="app">
    <Header />
    <main class="container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Styles globaux */
.app {
  font-family: Arial, sans-serif;
}
.container {
  padding: 20px;
}
</style>
