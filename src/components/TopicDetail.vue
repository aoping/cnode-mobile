<template>
  <div>
    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
      <mu-card-header
        :title="topic.author.loginname"
        :sub-title="topic.create_at|getLastTimeStr(true)"
      >
        <mu-avatar slot="avatar">
          <img :src="topic.author.avatar_url">
        </mu-avatar>
      </mu-card-header>
      <mu-card-title :title="topic.title" :sub-title="topic.visit_count+'次浏览'"></mu-card-title>
      <mu-card-text v-html="topic.content"></mu-card-text>
    </mu-card>
    <mu-sub-header>回复</mu-sub-header>
    <div v-for="reply in topic.replies" :key="reply.id">
      <ReplyItem :reply="reply" @commitValue="commitValue"/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getLastTimeStr } from "@/utils/filters/local";
import ReplyItem from "@/components/ReplyItem";
export default {
  props: ["topic"],
  data() {
    return {};
  },
  filters: {
    getLastTimeStr
  },
  components: {
    ReplyItem
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    commitValue(content) {
      this.$emit("commitValue", content);
    }
  }
};
</script>

<style>
.mu-card-text img {
  max-width: 100%;
}
</style>
