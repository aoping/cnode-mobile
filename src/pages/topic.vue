<template>
  <mu-container style="padding: 0" v-loading="loading">
    <Header title="主题"/>
    <scroller ref="scroller" class="scroller">
      <TopicDetail v-if="topic" :topic="topic" style="padding-bottom: 56px;">{{topic}}</TopicDetail>
    </scroller>
  </mu-container>
</template>

  <script>
import TopicDetail from "@/components/TopicDetail";
import Header from "@/components/Header";
import { getTopicDetail } from "@/api";

export default {
  data() {
    return {
      loading: true,
      id: "",
      topic: null // 主题
    };
  },
  async mounted() {
    this.id = this.$route.params.id;
    this.loading = true;
    let res = await getTopicDetail(this.id);
    this.topic = res.data;
    this.loading = false;
  },
  components: {
    Header,
    TopicDetail
  },
  methods: {}
};
</script>

<style scoped>
.scroller {
  margin-top: 56px;
}
</style>

