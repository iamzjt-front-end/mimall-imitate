<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage1 from "./storage/index";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(storage1);
    storage1.getItem("user");
  },
};
</script>

<style>
</style>
