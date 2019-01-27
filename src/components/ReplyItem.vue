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
        <mu-icon value="thumb_up" size="18" @click="ups" :color="uped?'#2196f3':'#000'"></mu-icon>
        <p
          style="display:inline-block;top:0;font-size:18px;margin:0"
          :style="{color: uped?'#2196f3':'#000'}"
        >{{reply.ups && reply.ups.length}}</p>
        <mu-icon value="reply" size="18"></mu-icon>
      </div>
    </mu-card-header>
    <mu-card-text v-html="reply.content"></mu-card-text>
  </mu-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getLastTimeStr } from "@/utils/filters/local";
import loginConfirm from "@/utils/loginConfirm";
import { ups, accesstoken } from "@/api";

export default {
  props: ["reply"],
  filters: {
    getLastTimeStr
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["userInfo"]),
    uped() {
      if (!this.userInfo.id) return false;
      return this.reply.ups.findIndex(item => item === this.userInfo.id) > -1;
    }
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    async ups() {
      if (!this.userInfo.id) await loginConfirm(this);
      const res = await ups(this.reply.id, this.userInfo.accesstoken);
      if (res.success) {
        if (res.action === "up") this.reply.ups.push(this.userInfo.id);
        else {
          const index = this.reply.ups.findIndex(
            item => item.id === this.userInfo.id
          );
          this.reply.ups.splice(index, 1);
        }
      } else {
        this.$toast.message("操作失败");
      }
    }
  }
};
</script>

<style scoped>
.visit-wrapper {
  float: right;
}
</style>
