<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { setItem, getItem, getStorage, clear } from "./storage";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(storage);
    setItem("user", { a: 1 });
  },
};
</script>

<style>
</style>
