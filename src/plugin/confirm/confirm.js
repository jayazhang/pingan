import Confirm from './confirm.vue'
import objectAssign from 'object-assign'
import { mergeOptions } from '../../utls'

// 默认参数
const defaultOptions = {
  // 标题
  title: '确 认',
  // 类型，目前只有confirm
  type: 'confirm',
  /**
   * iconType
   * del 删除
   * danger 警告
   * ques 疑问
   * success 成功
   * fail 失败
   */
  iconType: 'del',
  // 内容
  content: '这里是提示内容<br/>哈哈',
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
  // ok方法返回的是否是promise
  isPromise: false,
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

let $vm
// 执行队列
let queue = []
// 弹框是否还在显示
let isDoing = false

const plugin = {
  install (Vue) {
    if (!$vm) {
      const ConfirmVm = Vue.extend(Confirm)
      $vm = new ConfirmVm({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    $vm.$watch('show', function (val) {
      if (!val) {
        setTimeout(action, 500)
      }
    })

    const confirm = (options = {}) => {
      options = objectAssign({}, defaultOptions, options)
      queue.push(options)
      if (!isDoing) {
        action()
      }
    }

    // 关闭弹框
    confirm.hide = function () {
      $vm.show = false
    }

    // 执行打开，500毫秒后开始执行下一次弹框
    function action () {
      let option = queue.shift()
      if (!option) {
        isDoing = false
        return
      }
      mergeOptions($vm, option)
      $vm.show = isDoing = true
    }

    if (!Vue.$common) {
      Vue.$common = {
        confirm
      }
    } else {
      Vue.$common.confirm = confirm
    }

    Vue.mixin({
      created: function () {
        this.$common = Vue.$common
      }
    })
  }
}

export default plugin
