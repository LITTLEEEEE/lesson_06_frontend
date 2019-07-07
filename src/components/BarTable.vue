<template>
    <div class="bar-main">
      <ve-bar :data="chartData" :height="barHeight" :extend="extend" :settings="chartSettings" :colors="colors" :legend-visible="false"></ve-bar>
    </div>
</template>

<script>
export default {
  name: 'BarTable',
  props: {
    barType: {
      default: '1',
      type: String
    }
  },
  data () {
    return {
      chartData: {},
      barHeight: '100%',
      extend: {
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: '#FFF' // 更改坐标轴文字颜色
            }
          }
        },
        yAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: '#FFF' // 更改坐标轴文字颜色
            }
          }
        },
        series: {
          type: 'bar',
          itemStyle: {
            normal: {
            }
          }
        }
      },
      chartSettings: {},
      colors: []
    }
  },
  methods: {
    testDetail () {
      this.commonUtil.getUtil(this.globalApi.getTestDetail, {params: this.barType}, res => {
        if (res.code === 200) {
          this.chartData = res.data.chartData
          if (this.barType === '1') {
            this.colors = ['#43bbce']
          } else {
            this.colors = ['#ebb34b']
          }
        }
      }, err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.testDetail()
  }
}
</script>

<style scoped>

</style>
