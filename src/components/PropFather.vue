<template>
    <div>
      我是父组件
      <prop-son :msg="someMsg" @sonMsg="getMsg">
        <div slot="sonSlot">
          <div>
            我是父组件进行的插槽实验
            <Table :columns="columns1" :data="data1"></Table>
            <exp-slot></exp-slot>
          </div>
        </div>
      </prop-son>
    </div>
</template>

<script>
import PropSon from '@/components/PropSon'
import ExpSlot from '@/components/ExpSlot'
export default {
  name: 'PropFather',
  data () {
    return {
      someMsg: '你是我的第一个子组件',
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    getMsg (parms) {
      alert(parms)
    }
  },
  components: {
    PropSon,
    ExpSlot
  }
}
</script>

<style scoped>

</style>
