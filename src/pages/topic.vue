<template>
  <mu-container style="padding: 0">
    <Header title="主题"/>
    <div>{{topic}}</div>
  </mu-container>
</template>

  <script>
import Header from "@/components/Header";
import { getTopicDetail } from "@/api";

export default {
  data() {
    return {
      id: "",
      topic: {} // 主题
    };
  },
  async mounted() {
    this.id = this.$route.params.id;
    let res = await getTopicDetail(this.id);
    this.topic = res.data;
  },
  components: {
    Header
  },
  methods: {}
};
</script>

  <style scoped>
</style>
