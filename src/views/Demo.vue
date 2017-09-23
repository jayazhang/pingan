<template>
  <div id="demo">
    <div class="btn">
      <div class="class">带有icon的按钮（宽度130px）：common-btn icon-btn icon-btn-add</div>
      <a class="common-btn icon-btn icon-btn-add">添加</a>
    </div>
    <div class="btn">
      <div class="class">带有icon的按钮（宽度130px）：common-btn icon-btn icon-btn-back</div>
      <a class="common-btn icon-btn icon-btn-back">返回</a>
    </div>
    <div class="btn">
      <div class="class">带有icon的按钮（宽度130px）：common-btn icon-btn icon-btn-modify</div>
      <a class="common-btn icon-btn icon-btn-modify">修改</a>
    </div>
    <div class="btn">
      <div class="class">带有icon的按钮（宽度130px）：common-btn icon-btn icon-btn-del</div>
      <a class="common-btn icon-btn icon-btn-del">删除</a>
    </div>
    <div class="btn">
      <div class="class">带有icon的按钮（宽度150px）：common-btn icon-btn icon-btn-export</div>
      <a class="common-btn icon-btn icon-btn-export">数据导出</a>
    </div>
    <div class="btn">
      <div class="class">搜索按钮（宽度50px）：common-btn search</div>
      <a class="common-btn search"></a>
    </div>
    <div class="btn">
      <div class="class">普通按钮（宽度100%）：common-btn</div>
      <a class="common-btn">按钮</a>
    </div>
    <div class="btn">
      <div class="class">高度40px按钮（宽度100%）：common-btn lg</div>
      <a class="common-btn lg">高度40px按钮</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo'
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  #demo {
    width: 1000px;
    margin: 0 auto;
  }
  .btn {
    margin-top: 15px;
    .class {
      margin-bottom: 8px;
    }
  }
</style>
