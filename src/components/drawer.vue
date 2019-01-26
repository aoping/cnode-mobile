<template>
  <div>
    <mu-appbar style="width: 100%;text-align:center;" color="#fff" textColor="#000">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      {{title}}
      <mu-button flat slot="right" href="/login">
        <mu-icon value="account_circle"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-drawer :open.sync="open" :right="false" :docked="false">
      <mu-list>
        <router-link to="/login" v-if="!isLogin">
          <mu-list-item button>
            <mu-icon value="account_circle"></mu-icon>
            <mu-list-item-title>登录</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link to="/login" v-else>
          <mu-list-item button>
            <mu-avatar :size="40">
              <img src="https://muse-ui.org/img/uicon.ac3913bf.jpg">
            </mu-avatar>
          </mu-list-item>
        </router-link>
        <mu-divider></mu-divider>
        <mu-sub-header>分类</mu-sub-header>
        <mu-list-item button v-for="item in indexTab" :key="item.title" @click="setTab(item)">
          <mu-list-item-title>{{item.title}}</mu-list-item-title>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-sub-header>个人中心</mu-sub-header>
        <router-link v-for="item in adminTab" :key="item.title" :to="item.href">
          <mu-list-item button>
            <mu-list-item-title>{{item.title}}</mu-list-item-title>
          </mu-list-item>
        </router-link>
      </mu-list>
    </mu-drawer>
    <slot></slot>
  </div>
</template>

<script>
import config from "@/config";
export default {
  props: ["title"],
  data() {
    return {
      open: false,
      indexTab: config.indexTab,
      adminTab: config.adminTab,
      isLogin: false
    };
  },
  created() {},
  components: {},
  methods: {
    setTab(tab) {
      this.open = false;
      this.$emit("setTab", tab);
    }
  }
};
</script>

<style scoped>
</style>
