<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(storage);
    storage.getItem("user");
  },
};
</script>

<style>
</style>
