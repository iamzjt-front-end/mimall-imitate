<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { setItem, getItem, getStorage, clear } from "./storage/index";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(storage);
    getItem("user");
  },
};
</script>

<style>
</style>
