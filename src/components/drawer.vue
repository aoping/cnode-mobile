<template>
  <div>
    <mu-appbar style="width: 100%;text-align:center;" color="#fff" textColor="#000">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      {{title}}
      <mu-button v-if="userInfo.avatar_url" flat slot="right" @click="toLogin">
        <mu-avatar :size="30">
          <img :src="userInfo.avatar_url">
        </mu-avatar>
      </mu-button>
      <mu-button v-else flat slot="right" @click="toLogin">
        <mu-icon value="account_circle"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-drawer :open.sync="open" :right="false" :docked="false">
      <mu-list>
        <mu-list-item v-if="!userInfo.avatar_url" button @click="toLogin">
          <mu-icon value="account_circle"></mu-icon>
          <mu-list-item-title>登录</mu-list-item-title>
        </mu-list-item>
        <mu-list-item v-else button @click="toLogin">
          <mu-avatar :size="40">
            <img :src="userInfo.avatar_url">
          </mu-avatar>
          <span style="margin-left: 10px;">{{userInfo.loginname}}</span>
        </mu-list-item>
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
import { mapGetters, mapState } from "vuex";
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
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    setTab(tab) {
      this.open = false;
      this.$emit("setTab", tab);
    },
    toLogin() {
      this.open = false;
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
</style>
