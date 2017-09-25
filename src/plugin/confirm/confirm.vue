<template>
  <div id="confirm" class="confirm">
    <div class="confirm-backdrop" :class="{ show: show && isShowBackdrop }" @click="clickBackdrop"></div>
    <div class="confirm-content" :class="{ show: show }">
      <div class="confirm-content-title">
        <div class="title">{{title}}</div>
        <div class="close" @click="fail"></div>
      </div>
      <div class="confirm-content-body clearfix">
        <div class="left">
          <img :src="iconList[iconType]" />
        </div>
        <div class="right" v-html="content"></div>
      </div>
      <div class="confirm-content-footer" v-show="isShowCancelBtn || isShowConfirmBtn">
        <button v-show="isShowConfirmBtn" class="common-btn btn-confirm" @click="success">{{confirmBtnText}}</button>
        <button v-show="isShowCancelBtn" class="common-btn btn-confirm cancel" @click="fail">{{cancelBtnText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  const iconList = {
    danger: require('../../assets/icon/icon_03.png'),
    del: require('../../assets/icon/icon_06.png'),
    ques: require('../../assets/icon/icon_08.png'),
    success: require('../../assets/icon/icon_10.png'),
    fail: require('../../assets/icon/icon_12.png'),
  }

  export default {
    name: 'confirm',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '确  认'
      },
      content: {
        type: String,
        default: ''
      },
      iconType: {
        type: String,
        default: 'del'
      },
      cancelBtnText: {
        type: String,
        default: '取消'
      },
      confirmBtnText: {
        type: String,
        default: '确定'
      },
      isShowConfirmBtn: {
        type: Boolean,
        default: true
      },
      isShowCancelBtn: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return { iconList }
    },
    methods: {
      success () {
        if (typeof this.ok === 'function' && this.ok instanceof Promise) {
          this.ok().then(() => {
            this.show = false
            this.complete()
          })
        }
        if (typeof this.ok === 'function') {
          this.ok()
          this.complete()
          this.show = false
        }
      },
      fail () {
        if (typeof this.cancel === 'function') {
          this.cancel()
          this.complete()
          this.show = false
        }
      },
      clickBackdrop () {
        if (!this.clickBackdropIsCancel) return
        this.fail()
      }
    }
  }
</script>

<style rel="stylesheet/less" type="text/less" lang="less" scoped>
  @import "../../less/theme";

  .confirm {
    font-family: 宋体;
    font-size: 14px;

    &-backdrop {
      position: fixed;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0,0,0, 0.45);
      transition: all 0.25s;
      opacity: 0;

      &.show {
        opacity: 1;
        z-index: 10000;
      }
    }

    &-content {
      position: fixed;
      z-index: -1;
      width: 500px;
      height: 230px;
      left: 50%;
      top: 50%;
      margin: -115px 0 0 -250px;
      transition: opacity 0.25s ease-in, transform 0.25s ease-in, z-index 0.25s ease-in;
      background-color: #fff;
      transform: scale(0.6);
      opacity: 0;

      &.show {
        z-index: 10001;
        opacity: 1;
        transform: scale(1);
      }
    }

    &-content-title {
      position: relative;
      background-color: @confirm-title-bgcolor;
      color: @confirm-title-color;

      .title {
        padding-left: 20px;
        line-height: 35px;
      }

      .close {
        position: absolute;
        top: 0;
        right: 0;
        width: 35px;
        height: 35px;
        background: url("../../assets/icon/icon_25.png") no-repeat center center;

        &:hover {
          background: @confirm-close-hover url("../../assets/icon/icon_25.png") no-repeat center center;
        }

        &:active {
          background: @confirm-close-active url("../../assets/icon/icon_25.png") no-repeat center center;
        }
      }
    }

    &-content-body {
      .left {
        width: 92px;
        padding: 35px 15px 0 40px;

        img {
          width: 100%;
        }
      }
      .right {
        float: left;
        padding-top: 45px;
      }
    }

    &-content-footer {
      position: absolute;
      width: 100%;
      height: 40px;
      left: 0;
      bottom: 0;
      padding-right: 20px;
      text-align: right;
    }
  }
</style>
