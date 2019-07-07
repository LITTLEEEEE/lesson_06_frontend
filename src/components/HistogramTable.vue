<template>
    <div class="histogram">
      <ve-histogram :data="charData" :height="hisHeight" :extend="extend" :settings="chartSettings" :colors="colors" :legend-visible="legendVisible"></ve-histogram>
    </div>
</template>

<script>
export default {
  name: 'HistogramTable',
  data () {
    return {
      charData: {},
      hisHeight: '100%',
      extend: {
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          textStyle: {
            color: '#fff'
          }
        },
        series: [{
          type: 'bar',
          barWidth: '20%'
        },
        {type: 'line'}
        ],
        xAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          }
        }
      },
      chartSettings: {},
      colors: [],
      legendVisible: false
    }
  },
  props: ['tableType'],
  methods: {
    drawHis (type) {
      switch (type) {
        case 'class-status':
          this.hisHeight = '95%'
          this.classStatus()
          break
        case 'testDetail':
          this.testDetail()
          break
      }
    },
    classStatus () {
      this.commonUtil.getUtil(this.globalApi.getClassStatus, {}, res => {
        if (res.code === 200) {
          this.legendVisible = true
          this.charData = res.data.chartData
          this.colors = ['#3f95f3', '#3ebbd0']
          this.extend.series.label = {
            show: false,
            position: 'left'
          }
          this.extend.series.barWidth = '20%'
          this.extend.series.legend = {
            textStyle: {
              color: '#fff'
            }
          }
        }
      }, err => {
        console.log(err)
      })
    },
    testDetail () {
      this.commonUtil.getUtil(this.globalApi.testDetail, {}, res => {
        if (res.code === 200) {
          this.chartSettings = {
            stack: { '评分': ['智能评测', '手动打分'] },
            showLine: ['批阅实验总数']
          }
          this.legendVisible = true
          this.charData = res.data.chartData
          this.colors = [ '#bb5ffb', '#2de09a', '#cdaf50']
          this.extend.series.barWidth = '20%'
          this.extend.series.legend = {
            textStyle: {
              color: '#fff'
            }
          }
        }
      }, err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.drawHis(this.tableType)
  }
}
</script>

<style scoped>

</style>
