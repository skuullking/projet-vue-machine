<template>
    <div class="border p-4">
      <h2 class="text-xl font-bold">{{ chef.name }}</h2>
      <p>{{ chef.specialty }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps(['chef']);
  </script>
  