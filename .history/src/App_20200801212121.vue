<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { storage } from "./storage";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(storage);
    storage.setItem("user", { a: 1 });
  },
};
</script>

<style>
</style>
