<template>
  <div id="index" class="index clearfix">
    <div class="index-left left">

    </div>
    <div class="index-middle left">
      <!--实时数据列表-->
      <common-pannel title="实时数据列表">
        <table class="common-table">
          <thead>
          <tr>
            <th></th>
            <th width="80">车牌号</th>
            <th>区域</th>
            <th width="180">进入时间</th>
            <th width="180">出门时间</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td></td>
            <td title="京A99ABC">
              京A99ABC
            </td>
            <td title="区域车牌号车牌号车牌号车牌号车牌号车牌号">
              区域车牌号车牌号车牌号车牌号车牌号车牌号
            </td>
            <td>2017年04月28日 13:30:25</td>
            <td>2017年04月28日 13:30:25</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </common-pannel>

      <!--告警事件列表-->
      <common-pannel title="告警事件列表" class="pannel-margin-top">
        <table class="common-table">
          <thead>
          <tr>
            <th></th>
            <th width="80">车牌号</th>
            <th>区域</th>
            <th width="70">级别</th>
            <th width="120">时间</th>
            <th>内容</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td></td>
            <td title="京A99ABC">京A99ABC</td>
            <td title="区域车牌号车牌号车牌号车牌号车牌号车牌号">
              区域车牌号车牌号车牌号车牌号车牌号车牌号
            </td>
            <td>警告<span>异常</span></td>
            <td>2017年04月28日</td>
            <td title="套牌车辆">套牌车辆</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </common-pannel>
    </div>
    <div class="index-right left">3</div>
  </div>
</template>

<script>
  export default {
    name: 'index',
  }
</script>

<style rel="stylesheet/less" type="text/less" lang="less" scoped>
  @import "../less/utls.less";
  @import "../less/theme.less";
  @import "../less/common.less";

  .index {
    height: 100%;

    // 首页内容颜色，字体，字号
    tbody {
      font-size: 14px;
      font-family: 宋体;
      color: @index-content-color;
    }

    &-left,
    &-right {
      .logo-width;
      height: 100%;
    }

    &-middle {
      height: 100%;
      width: calc(~'100% - @{header-logo-width} * 2');

      @media (max-width: 1300px) {
        width: calc(~'100% - @{header-logo-width-small} * 2');
      }
    }
  }

  .pannel-margin-top {
    margin-top: 10px;
  }
</style>
