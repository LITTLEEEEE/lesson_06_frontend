<template>
  <!--html书写区域，根节点有且只能有一个 下行的div就是 在根节点下书写相关html代码-->
   <div>
     我是子组件
     <!--msg，all为动态获取的变量显示于网页内方式为用两个花括号包围{{msg}}-->
     {{msg}}
     {{all}}
     {{temp1}}
     <a :href="testA">我是测试连接</a>
     <!--Input标签与Button标签并非html原生input和button标签 为iview标签 使用时注意区分-->
     <Input v-model="temp1" placeholder="Enter something..." />
     <Button type="primary" @click="action">点我</Button>
     <div v-show="testA">v-if判断显示区域</div>
     <div>
       插槽区域
       <!--slot为插槽锚点标签 由父组件传入的组件将于slot标签位置显示 使用name属性进行区分定位-->
       <slot name="sonSlot"></slot>
     </div>
   </div>
</template>

<script>
/* 此处为引入自定义组件及插件区域 */
export default {
  // name 为组件名称 由ide自动生成
  name: 'PropSon',
  // data 为自定义变量声明区域 注意与网上教程不同 data为一个function 返回值为一个json 在其中声明变量,声明后与别处通过this.进行调用
  data: function () {
    return {
      temp1: 'hehe',
      temp2: 'haha',
      testA: ''
    }
  },
  // props 为父组件向子组件传值接受区域 可以指定偏亮默认值 类型等
  props: {
    msg: ''
  },
  // 为自定义方法声明区域，声明后于别处通过this.进行调用
  methods: {
    action () {
      this.$emit('sonMsg', '子组件的按钮被点击了')
    },
    ajaxTest () {
      /* this.commonUtil.ajaxTestUtil('test.json', {}, res => {
        console.log(res)
      }, err => {
        console.log(err)
      }) */
      this.commonUtil.getUtil(this.globalApi.test, {}, res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    }
  },
  // 引用组件注册区域
  components: {},
  // 计算属性 声明区域，声明后vue将动态识别方法所需依赖的变量 当其中的变量变化时 自动运行
  computed: {
    all: function () {
      return this.temp1 + this.temp2
    }
  },
  // 侦听区域 key值为侦听对象 当侦听对象值产生变化时 自动执行value方法
  watch: {
    temp1: function () {
      alert('temp1发生了改变 新值是：' + this.temp1)
    }
  },
  // vue生命周期钩子之一 当页面内容挂载后执行的相关逻辑
  mounted () {
    this.temp2 = 'xixi'
    this.ajaxTest()
  },
  //  vue生命周期钩子之一 当页面创建后挂载的钩子
  created () {

  }
}
</script>

<style scoped>

</style>
<style>

</style>
