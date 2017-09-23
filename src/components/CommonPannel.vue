<template>
  <div class="pannel">
    <div class="title" :class="titleType">{{title}}</div>
    <div class="content" :style="{ padding: padding }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'common-pannel',
    props: {
      // 标题
      title: {
        type: String,
        default: 'title'
      },
      // 内容的padding
      padding: {
        type: String,
        default: '25px 25px 35px 25px'
      },
      // 标题高度的区分, 默认为空，45px高度为lg
      titleType: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style rel="stylesheet/less" scoped lang="less">
  @import "../less/utls";
  @import "../less/theme";
  @import "../less/common";

  .pannel {
    border: 2px solid @pannel-border-color;

    .title {
      padding-left: 25px;
      background-color: @pannel-title-bg;
      color: @pannel-title-color;
      line-height: 28px;
      font-size: 16px;

      &.lg {
        line-height: 45px;
      }
    }
  }

</style>
