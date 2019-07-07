<template>
    <div class="echarts-main">
      我是echarts组件
      <ve-line :data="chartData" :extend="extend" :events="chartEvents" :after-set-option="afterSetOption"></ve-line>
    </div>
</template>

<script>
export default {
  name: 'EchartsTest',
  data: function () {
    return {
      echartInstance: '',
      chartEvents: {
        click: function (e) {
          console.log(e.name)
          this.echartInstance.dispatchAction({
            type: 'highlight',
            name: e.name
          })
        }
      },
      extend: {
        series: {
          label: {
            normal: {
              show: true
            }
          }
        }
      },
      chartData: {}
    }
  },
  methods: {
    afterSetOption (e) {
      this.echartInstance = e
    },
    ajaxTest () {
      this.commonUtil.getUtil(this.globalApi.getEchartsLine, {}, res => {
        if (res.code === 200) {
          this.chartData = res.data
        } else {
          this.$Message.warning(res.msg)
        }
      }, err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.ajaxTest()
  }
}
</script>

<style scoped>

</style>
