<template>
    <div class="the-header">
      <img src="../assets/title.png" />
      <span class="time">{{time}}</span>
      <span class="time">{{timeNow}}</span>
    </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      time: '2017-2018学年  上学期  第十周',
      timeNow: ''
    }
  },
  methods: {
    showTime () {
      let temp = new Date()
      let tempArray = ['日', '一', '二', '三', '四', '五', '六']
      this.timeNow = '日期：' + temp.getFullYear() + '-' + (temp.getMonth() + 1) + '-' + temp.getDate() + '  星期' + tempArray[temp.getDay()] + '  ' + temp.getHours() + ':' + temp.getMinutes() + ':' + temp.getSeconds()
      setTimeout(this.showTime, 1000)
    }
  },
  mounted () {
    this.showTime()
  }
}
</script>

<style scoped lang="less">
  .the-header{
    background: #0b446c;
    padding: 1vh;
    display: flex;
    justify-content: space-between;
    img{
      vertical-align: middle;
    }
    .time{
     color: #e5ffff;
      font-size: 1.5vh;
      vertical-align: middle;
    }
    span:not(:last-child){
      position: fixed;
      left: 44%;
    }
  }
</style>
