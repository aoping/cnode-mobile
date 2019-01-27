<template>
  <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
    <mu-card-header
      :title="reply.author.loginname"
      :sub-title="reply.create_at|getLastTimeStr(true)"
    >
      <mu-avatar slot="avatar">
        <img :src="reply.author.avatar_url">
      </mu-avatar>
      <div class="visit-wrapper">
        <mu-icon value="thumb_up" size="18"></mu-icon>
        <p style="display:inline-block;top:0;font-size:18px;">{{reply.ups && reply.ups.length}}</p>
        <mu-icon value="reply" size="18"></mu-icon>
      </div>
    </mu-card-header>
    <mu-card-text v-html="reply.content"></mu-card-text>
  </mu-card>
</template>

<script>
import { getLastTimeStr } from "@/utils/filters/local";

export default {
  props: ["reply"],
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
.visit-wrapper {
  float: right;
}
</style>
