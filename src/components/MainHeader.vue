<template>
  <div id="Header" class="main-header">
    <!--左侧logo-->
    <div class="main-header-logo left">
      <img src="../assets/header/logo.png">
    </div>
    <!--中间菜单-->
    <div class="main-header-menu left">
      <router-link class="menu-menu"
                   :class="{ current: path.indexOf(menu.link.path) > -1 }"
                   v-for="menu in menuList"
                   :key="menu.text"
                   :to="menu.link"
                   v-if="menu.authority.indexOf(authority) > -1">
        <img class="menu-icon" :src="menu.img"/>
        <div class="menu-text" v-html="menu.text"></div>
        <ul class="menu-submenu" v-if="menu.subMenus">
          <li v-for="submenu in menu.subMenus"
              v-html="submenu.text"
              v-if="menu.authority.indexOf(authority) > -1"></li>
        </ul>
      </router-link>
    </div>
    <!--右侧操作按钮-->
    <ul class="main-header-user right">
      <li class="menu-menu">
        <div class="menu-user">
          <span class="menu-user-text">管理员</span>
          <img src="../assets/header/user.png"/>
        </div>
        <ul class="menu-submenu">
          <li>修改密码</li>
          <li>切换用户</li>
          <li>退<span class="placeholder">占位</span>出</li>
        </ul>
      </li>
      <li class="menu-menu">
        <div class="menu-lamp">
          <img src="../assets/header/lamp-green.png"/>
          <!--<img src="../assets/header/lamp-red.png" />-->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  const menuList = [
    {
      img: require('../assets/header/header_05.png'),
      text: '首<span class="placeholder">空格</span>页',
      authority: ['admin', 'normal'],
      link: { name: 'Index', path: '/main/' },
    },
    {
      img: require('../assets/header/header_07.png'),
      text: '数据查询',
      authority: ['admin', 'normal'],
      link: { name: 'DataSearch', path: '/main/data-search' },
    },
    {
      img: require('../assets/header/header_09.png'),
      text: '数据分析',
      authority: ['admin', 'normal'],
      link: '',
      subMenus: [
        {text: '套牌车辆', authority: ['admin', 'normal'], link: '', current: false},
        {text: '黑车车辆', authority: ['admin', 'normal'], link: '', current: false},
        {text: '违章车辆', authority: ['admin', 'normal'], link: '', current: false},
        {text: '僵尸车辆', authority: ['admin', 'normal'], link: '', current: false},
        {text: '可疑车辆', authority: ['admin', 'normal'], link: '', current: false},
        {text: '外地车辆', authority: ['admin', 'normal'], link: '', current: false},
        {text: '空余车位', authority: ['admin', 'normal'], link: '', current: false}
      ]
    },
    {
      img: require('../assets/header/header_11.png'),
      text: '审计日志',
      authority: ['admin', 'normal'],
      link: '',
    },
    {
      img: require('../assets/header/header_13.png'),
      text: '系统维护',
      authority: ['admin'],
      link: '',
      subMenus: [
        {text: '用户维护', authority: ['admin'], link: '', current: false},
        {text: '停车场维护', authority: ['admin'], link: '', current: false},
      ]
    },
  ]

  export default {
    name: 'header',
    data () {
      return {
        menuList,
        // 权限：
        // 管理员权限：admin
        // 普通权限：normal
        authority: 'admin',
        // 路由name
        name: this.$route.name,
        // 路由path
        path: this.$route.path
      }
    },
    watch: {
      $route (to) {
        console.log(to)
        this.name = to.name
        this.path = to.path
      }
    }
  }
</script>

<style rel="stylesheet/less" scoped lang="less">
  @import "../less/utls";
  @import "../less/theme";
  @import "../less/common";

  .menu-menu {
    position: relative;
    float: left;
    width: 120px;
    height: 100%;
    padding-top: 23px;
    text-align: center;
    cursor: pointer;
    line-height: 1;

    &:hover,
    &.current {
      background: url("../assets/header/menu-bg.png") no-repeat 100% 100%;
    }

    &:hover {
      .menu-submenu {
        display: block;
      }
    }
  }

  .menu-icon {
  }

  .menu-text {
    position: absolute;
    bottom: 25px;
    width: 100%;
    font-size: 13px;
    color: @header-menu-color;
  }

  .menu-submenu {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    padding-top: 3px;

    li {
      padding-left: 33px;
      margin-bottom: 3px;
      line-height: 28px;
      font-size: 13px;
      text-align: left;
      color: @header-menu-color;
      background: url("../assets/header/submenu-bg.png");

      &:hover,
      &:active {
        background: url("../assets/header/submenu-hover.png");
        color: @header-menu-hover-color;
      }
      &.current {
        background: url("../assets/header/submenu-selected.png");
        color: @header-menu-select-color;
      }
    }
  }

  .main-header {
    color: @header-color;

    &-logo {
      height: 100%;
      line-height: 108px;
      padding-left: 25px;
      .logo-width;
    }

    &-menu,
    &-user {
      height: 100%;
    }

    &-user {
      padding-right: 25px;

      .menu-menu {
        padding: 0;
        float: right;
      }

      .menu-user {
        height: 100%;
        line-height: @header-height - 2;

        img {
          position: relative;
          top: -2px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }

        &-text {
          display: inline-block;
          width: 60px;
          padding-right: 15px;
          margin-right: 5px;
          text-align: right;
          font-size: 14px;
          font-family: '宋体';
          background: url("../assets/header/arrow.png") no-repeat right center;
          background-size: 10px 7px;
        }
      }
    }

    height: @header-height;
    background: rgba(30, 91, 204, 1);
    background: -moz-linear-gradient(top, rgba(30, 91, 204, 1) 0%, rgba(0, 49, 137, 1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(30, 91, 204, 1)), color-stop(100%, rgba(0, 49, 137, 1)));
    background: -webkit-linear-gradient(top, rgba(30, 91, 204, 1) 0%, rgba(0, 49, 137, 1) 100%);
    background: -o-linear-gradient(top, rgba(30, 91, 204, 1) 0%, rgba(0, 49, 137, 1) 100%);
    background: -ms-linear-gradient(top, rgba(30, 91, 204, 1) 0%, rgba(0, 49, 137, 1) 100%);
    background: linear-gradient(to bottom, rgba(30, 91, 204, 1) 0%, rgba(0, 49, 137, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e5bcc', endColorstr='#003189', GradientType=0);
  }
</style>
