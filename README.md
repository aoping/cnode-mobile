# cnode-mobile

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目可能遇到的问题

## v-html 里的样式无法修改

解决方案 1：在 updated 生命周期函数中，js 动态配置样式，代码如下

```
updated() {
    $('.mu-card-text').find('img').css('max-width', '100%');
 },
```

解决方案 2：去掉 style 标签中的 scoped 属性

```
<style>
.mu-card-text img {
  max-width: 100%;
}
</style>
```

## vue-scroller 组件

1. 停止监听加载更多
2. scrollTo 无法使用

##
