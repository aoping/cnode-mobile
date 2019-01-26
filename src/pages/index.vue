<template>
  <mu-container style="padding: 0">
    <Drawer/>
    <div>
      <p v-for="i in 100" :key="i">{{i}}</p>
    </div>
  </mu-container>
</template>

<script>
import Drawer from "@/components/drawer";

export default {
  data() {
    return {
      open: false
    };
  },
  components: {
    Drawer
  }
};
</script>

<style scoped>
</style>
