<template>
  <div id="main">
    <main-header></main-header>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MainHeader from '@/components/MainHeader.vue'

  export default {
    name: 'main',
    components: {
      MainHeader
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../less/theme";

  .main-content {
    height: calc(~'100vh - @{header-height}');
    padding-bottom: 25px;
    padding-top: 20px;
    color: #fff;

    background: rgba(0,30,102,1);
    background: -moz-linear-gradient(-45deg, rgba(0,30,102,1) 0%, rgba(10,53,135,1) 51%, rgba(0,49,137,1) 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(0,30,102,1)), color-stop(51%, rgba(10,53,135,1)), color-stop(100%, rgba(0,49,137,1)));
    background: -webkit-linear-gradient(-45deg, rgba(0,30,102,1) 0%, rgba(10,53,135,1) 51%, rgba(0,49,137,1) 100%);
    background: -o-linear-gradient(-45deg, rgba(0,30,102,1) 0%, rgba(10,53,135,1) 51%, rgba(0,49,137,1) 100%);
    background: -ms-linear-gradient(-45deg, rgba(0,30,102,1) 0%, rgba(10,53,135,1) 51%, rgba(0,49,137,1) 100%);
    background: linear-gradient(135deg, rgba(0,30,102,1) 0%, rgba(10,53,135,1) 51%, rgba(0,49,137,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e66', endColorstr='#003189', GradientType=1 );
  }
</style>
