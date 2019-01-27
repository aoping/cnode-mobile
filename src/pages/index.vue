<template>
  <mu-container style="padding: 0" v-loading="loading">
    <Drawer :title="nav.title" @setTab="setTab"/>
    <scroller ref="scroller" class="scroller" :on-refresh="refresh" :on-infinite="infinite">
      <div v-for="topic in list" :key="topic.id">
        <TopicItem :topic="topic"/>
      </div>
    </scroller>
  </mu-container>
</template>

<script>
import Drawer from "@/components/Drawer";
import TopicItem from "@/components/TopicItem";
import { getTopics } from "@/api";
import config from "@/config";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      list: [],
      page: 1,
      nav: null,
      loading: true,
      finished: false,
      position: null
    };
  },
  components: {
    Drawer,
    TopicItem
  },
  async created() {
    this.nav = config.indexTab[0];
    this.getTopics();
  },
  methods: {
    setTab(tab) {
      this.finished = false;
      this.page = 1;
      this.nav = tab;
      this.getTopics();
    },
    async getTopics(callback) {
      this.loading = true;
      const result = await getTopics(this.page, this.nav.tab);
      if (result.success) {
        this.list = result.data;
      }
      this.loading = false;
      callback && callback();
    },
    async loadmore(callback) {
      const result = await getTopics(this.page, this.nav.tab);
      if (result.success) {
        this.list = this.list.concat(result.data);
        if (result.data.length < config.PAGENUM) this.finished = true;
      }
      callback && callback();
    },
    refresh(done) {
      setTimeout(() => {
        this.page = 1;
        this.getTopics(done);
      }, 1000);
    },
    infinite(done) {
      if (this.finished) {
        this.$refs.scroller.finishInfinite(true);
        return;
      }
      setTimeout(() => {
        this.page++;
        this.loadmore(done);
      }, 1000);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next(vm => {
      // 通过 `vm` 访问组件实例
      // vue-scroller有bug, 无法通过scrollTo设置滚动
      if (vm.position) vm.$refs.scroller.scroller.__scrollTop = vm.position.top;
    });
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log("beforeRouteLeave");
    this.position = this.$refs.scroller.getPosition();
    console.log(this.position);
    next();
  }
};
</script>

<style scoped>
.scroller {
  margin-top: 56px;
}
</style>
