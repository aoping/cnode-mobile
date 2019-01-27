<template>
  <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
    <router-link :to="'/topic/'+topic.id">
      <mu-card-text>
        <mu-badge v-if="topic.top" content="精华" color="secondary"></mu-badge>
        {{topic.title}}
      </mu-card-text>
    </router-link>
    <mu-card-header
      :title="topic.author.loginname"
      :sub-title="topic.create_at|getLastTimeStr(true)"
    >
      <mu-avatar slot="avatar">
        <img :src="topic.author.avatar_url">
      </mu-avatar>
      <div class="visit-wrapper">
        <p class="visit-num">
          <span class="color-green">{{topic.reply_count}}</span>
          /{{topic.visit_count}}
        </p>
        <p class="last-replay-at">{{topic.last_reply_at|getLastTimeStr(true)}}</p>
      </div>
    </mu-card-header>
  </mu-card>
</template>

<script>
import { getLastTimeStr } from "@/utils/filters/local";

export default {
  props: ["topic"],
  filters: {
    getLastTimeStr
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.mu-card-text {
  padding: 10px 16px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.visit-wrapper {
  float: right;
}
.visit-num {
  margin: 0;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.87);
}
.color-green {
  color: #42b983;
}
.last-replay-at {
  margin: 0;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.57);
}
</style>
