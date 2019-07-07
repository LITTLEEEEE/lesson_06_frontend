<template>
    <div class="activity">
      <div class="active-btn">
        <Button class="stu-btn" :disabled="!activity" @click="getActiveData('student')">学生</Button>
        <Button class="tea-btn" :disabled="activity" @click="getActiveData('teacher')">教师</Button>
      </div>
      <Table border  :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
export default {
  name: 'ToDayActivity',
  data () {
    return {
      activity: true,
      columns1: [],
      data1: []
    }
  },
  methods: {
    getActiveData (type) {
      this.commonUtil.getUtil(this.globalApi.getActiveData, {}, res => {
        if (res.code === 200) {
          this.activity = !this.activity
          this.columns1 = res.data[type].columns1
          this.data1 = res.data[type].data1
        }
      }, err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getActiveData('student')
  }
}
</script>

<style scoped>

</style>
<style lang="less">
  .activity{
    .active-btn{
      display: flex;
      justify-content: flex-end;
      margin-bottom: 3%;
      .stu-btn,.tea-btn{
        margin-right: 2%;
        width: 8%;
      }
    }
    .ivu-table{
      background-color: transparent;
      td{
        background-color: transparent;
        color: #fff;
      }
      th{
        background-color: transparent;
        color: #fff;
      }
    }
    .ivu-table:before{
      background-color: transparent;
    }
  }
</style>
