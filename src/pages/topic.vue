<template>
  <mu-container style="padding: 0" v-loading="loading">
    <Header title="主题"/>
    <scroller ref="scroller" class="scroller">
      <TopicDetail v-if="topic" :topic="topic" @commitValue="commitValue">{{topic}}</TopicDetail>
      <Markdown
        ref="markdown"
        :height="100"
        @commitValue="commitValue"
        :initialValue="initialValue"
      />
      <div style="padding-bottom: 56px;"></div>
    </scroller>
  </mu-container>
</template>

  <script>
import { mapState, mapActions } from "vuex";
import TopicDetail from "@/components/TopicDetail";
import Markdown from "@/components/Markdown";
import Header from "@/components/Header";
import { getTopicDetail, replies } from "@/api";

export default {
  data() {
    return {
      loading: true,
      id: "",
      topic: null, // 主题
      initialValue: ""
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
    TopicDetail,
    Markdown
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    async commitValue(content) {
      console.log("commitValue3" + content);
      const res = await replies(
        this.userInfo.accesstoken,
        this.topic.id,
        content
      );
      if (res.success) {
        this.topic.replies.push({
          id: res.reply_id,
          author: {
            loginname: this.userInfo.loginname,
            avatar_url: this.userInfo.avatar_url
          },
          content: content,
          ups: [],
          create_at: new Date()
        });
        this.$refs.markdown.clear();
      } else {
        this.$toast.message("评论失败");
      }
    }
  }
};
</script>

<style scoped>
.scroller {
  margin-top: 56px;
}
</style>

