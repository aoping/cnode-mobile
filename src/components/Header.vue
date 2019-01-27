<template>
  <div>
    <mu-appbar style="width: 100%;" color="#fff" textColor="#000">
      <mu-button icon slot="left" @click="back">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>
      {{title}}
    </mu-appbar>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      open: false
    };
  },
  created() {},
  components: {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
</style>
