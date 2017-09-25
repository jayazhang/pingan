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

    <div class="confirm" style="margin-top: 40px">
      <button @click="openConfirm('del', '删除哈哈哈哈哈哈')">打开删除弹框</button>
      <button @click="openConfirm('danger', 'ooooo')">打开警告弹框</button>
      <button @click="openConfirm('ques')">打开疑问弹框</button>
      <button @click="openConfirm('fail', null, '提 示')">打开失败弹框</button>
      <button @click="openConfirm('success')">打开成功弹框</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo',
    methods: {
      openConfirm (iconType, content, title) {
        // 所有的属性都是可选的
        const defaultOptions = {
          // 标题
          title: title || '确 认',
          // 类型，目前只有confirm
          type: 'confirm',
          // icon
          iconType,
          // 内容
          content: content || '这里是提示内容<br/>哈哈',
          // 是否显示确定按钮
          isShowConfirmBtn: true,
          // 是否显示取消按钮
          isShowCancelBtn: true,
          // 确定按钮默认文字
          confirmBtnText: '确认',
          // 取消按钮默认文字
          cancelBtnText: '取消',
          // 是否显示遮罩
          isShowBackdrop: true,
          // 点击遮罩是否关闭弹框
          clickBackdropIsCancel: true,
          // 点击确定按钮执行
          ok: function () {

          },
          // 点击取消、遮罩执行
          cancel: function () {

          },
          // 关闭弹框时执行
          complete: function () {

          }
        }
        this.$common.confirm(defaultOptions)
      }
    }
  }
</script>

<style rel="stylesheet/less" type="text/less" lang="less" scoped>
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
