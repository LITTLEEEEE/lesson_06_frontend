<template>
    <div class="liquid">
        <Row class="liquid-detail" >
          <Col span="8">
            <div class="liquid-text">未完结<br/>{{num1}}门</div>
          </Col>
          <Col span="8">
            <ve-liquidfill height="100%" :settings="chartSettings" :data="chartData" lengend-visible="false"></ve-liquidfill>
          </Col>
          <Col span="8">
            <div class="liquid-text liquid-text-right">已完结<br/>{{num2}}门</div>
          </Col>
        </Row>
        <Row class="liquid-detail2">
          开课总数{{num1+num2}}门
        </Row>
    </div>
</template>

<script>
export default {
  name: 'LiquidTable',
  data () {
    return {
      num1: 32,
      num2: 3,
      chartData: {
      },
      chartSettings: {
        seriesMap: {
          '总体教学进度': {
            type: 'liquidFill',
            color: ['#3e96ff'],
            radius: '100%',
            itemStyle: {
              opacity: 1
            },
            emphasis: {
              itemStyle: {
                opacity: 0.8
              }
            },
            backgroundStyle: {
              color: 'transparent'
            },
            label: {
              formatter (options) {
                const {
                  seriesName,
                  value
                } = options
                return `${seriesName}\n${Math.ceil(value * 100)}%`
              },
              fontSize: '50',
              color: '#fff',
              insideColor: '#fff'
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 2,
                borderColor: '#fff'
              }
            }
          }
        }
      }
    }
  },
  methods: {
    classOpen () {
      this.commonUtil.getUtil(this.globalApi.getOpenClass, {}, res => {
        if (res.code === 200) {
          this.chartData = res.data.chartData
          this.num1 = res.data.unfinished
          this.num2 = res.data.finish
        }
      }, err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.classOpen()
  }
}
</script>

<style scoped lang="less">
.liquid{
  display: flex;
  justify-content: center;
  flex-direction: column;
  .liquid-detail{
    height: 60%;
    .liquid-text{
      width: 46%;
      height: 25%;
      border-radius: 50%;
      text-align: center;
      background-color: #f95d5b;
      color: #fff;
      position: relative;
      top: 35%;
      margin: 0 auto;
      padding-top: 1.7vh;
      font-size: 1.2vh;
    }
    .liquid-text-right{
      background-color: #ebb44a;
    }
  }
  .liquid-detail2{
    text-align: center;
    color: #fff;
    font-size: 1.4vh;
  }
}
</style>
<style lang="less">
  .liquid-detail{
    .ivu-col{
      height: 100%;
    }
  }
</style>
