<template>
    <div class="scatter-main">
      <ve-scatter :data="chartData" :settings="chartSettings" width="100%" height="100%" :extend="extend"></ve-scatter>
    </div>
</template>

<script>
export default {
  name: 'ScatterTable',
  data () {
    return {
      chartData: {},
      chartSettings: {
        dimension: '日期',
        metrics: ['分数', '人数'],
        symbolSizeMax: 80
      },
      extend: {
        legend: {
          show: 1,
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          axisLabel: {
            color: '#fff'
          }
        },
        yAxis: {
          axisLabel: {
            color: '#fff'
          }
        }
      }
    }
  },
  methods: {
    getScatterData () {
      this.commonUtil.getUtil(this.globalApi.getScatterData, {}, res => {
        if (res.code === 200) {
          this.chartData = res.data.chartData
        }
      }, err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getScatterData()
  }
}
</script>

<style scoped>

</style>
