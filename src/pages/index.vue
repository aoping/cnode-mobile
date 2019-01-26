<template>
  <mu-container style="padding: 0">
    <Drawer/>
    <scroller class="scroller" :on-refresh="refresh" :on-infinite="infinite">
      <p v-for="i in 100" :key="i">{{i}}</p>
    </scroller>
  </mu-container>
</template>

<script>
import Drawer from "@/components/Drawer";

export default {
  data() {
    return {
      open: false
    };
  },
  components: {
    Drawer
  },
  methods: {
    refresh() {
      console.log("refresh");
    },
    infinite() {
      console.log("infinite");
    }
  }
};
</script>

<style scoped>
.scroller {
  margin-top: 56px;
}
</style>
