<template>
  <div>
    <mu-appbar style="width: 100%;" color="#fff" textColor="#000">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>Title
      <mu-button flat slot="right" href="/login">
        <mu-icon value="account_circle"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-drawer :open.sync="open" :right="false">
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  components: {}
};
</script>

<style scoped>
</style>
