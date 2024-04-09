<template>
    <div id="app">
      <component :is="layout">
        <router-view />
      </component>
    </div>
  </template>
  

<script>
import './assets/main.css'
export default {
  data() {
    return {
      layout: 'LayoutDefault'
    };
  }
};
</script>
