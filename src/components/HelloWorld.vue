<template>
  <div v-if="flag">
   <div>{{getAdd}}</div>
    <input v-model="c"/>
    <div>
      {{d}}
    </div>
    <div :class="{red: isRed}">123</div>
    <Row>
      <Col span="12" style="background-color: blue">
        <ve-line :data="chartData"></ve-line>
      </Col>
      <Col span="12" style="background-color: aqua">
        col-12
      </Col>
    </Row>
    <Table :columns="columns1" :data="data1"></Table>
    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
  </div>
</template>

<script>
import testA from '@/components/test'
export default {
  name: 'HelloWorld',
  components: {
    testA
  },
  data () {
    return {
      chartSettings: {
        metrics: ['访问用户', '下单用户'],
        dimension: ['日期']
      },
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      columns1: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '生日',
          key: 'date'
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
      ],
      flag: 'aaa',
      aaa: '你看见我啦',
      bbb: [1, 2, 'dsfas', 'tianjin'],
      c: 0,
      d: 1,
      isRed: false
    }
  },
  methods: {
    test (parms) {
      this.aaa = parms
    },
    test2 () {
      this.d = 'c的值变了'
    }
  },
  computed: {
    getAdd () {
      return this.c + this.d
    }
  },
  watch: {
    c () {
      this.test2()
    }
  },
  mounted () {
    this.c = '我是C'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red{
  background-color: red;
}
</style>
