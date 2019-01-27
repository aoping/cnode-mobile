<template>
  <div style="height: 100%;">
    <Header title="关于"/>

    <dl class="about-info">
      <dt>关于项目</dt>
      <dd>该项目是基于Cnodejs的api，采用vue.js重写的webapp。</dd>

      <dt>源码地址</dt>

      <dd>
        <a href="https://github.com/shinygang/Vue-cnodejs">https://github.com/shinygang/Vue-cnodejs</a>
      </dd>

      <dt>意见反馈</dt>
      <dd>
        <a href="https://github.com/shinygang/Vue-cnodejs/issues">发表意见或者提需求</a>
      </dd>

      <dt>当前版本</dt>
      <dd>V1.0</dd>
    </dl>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
