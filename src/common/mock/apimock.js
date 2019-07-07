const Mock = require('mockjs')
const Api = require('../url/api')
Mock.mock(new RegExp(Api.getForm), 'get', {
  'code': 500,
  'data': {
    'userName': '@cname',
    'password|2-3': 'sdaf'
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.getEchartsLine), 'get', {
  'code': 200,
  'data': {
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
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.getClassStatus), 'get', {
  'code': 200,
  'data': {
    chartData: {
      columns: ['时间', '已完结', '预计完结'],
      rows: [
        {'时间': '1月', '已完结': 0, '预计完结': 0},
        {'时间': '2月', '已完结': 2, '预计完结': 4},
        {'时间': '3月', '已完结': 6, '预计完结': 6},
        {'时间': '4月', '已完结': 5, '预计完结': 6}
      ]
    }
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.getOpenClass), 'get', {
  'code': 200,
  'data': {
    chartData: {
      columns: ['type', 'value'],
      rows: [
        {'type': '总体教学进度', 'value': 0.57}
      ]
    },
    unfinished: 32,
    finish: 10
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.getActiveData), 'get', {
  'code': 200,
  'data': {
    'teacher': {
      'columns1': [
        {
          'type': 'index',
          'width': 60,
          'align': 'center'
        },
        {
          'title': '编号',
          'key': 'idNum'
        },
        {
          'title': '姓名',
          'key': 'name'
        },
        {
          'title': '在线时长',
          'key': 'onlineTime'
        },
        {
          'title': '活跃值',
          'key': 'activeValue'
        }
      ],
      data1: [
        {'idNum': '23', 'name': '张三', 'onlineTime': '19', 'activeValue': '8'},
        {'idNum': '15', 'name': '李四', 'onlineTime': '23', 'activeValue': '8'},
        {'idNum': '45', 'name': '王五', 'onlineTime': '32', 'activeValue': '8'},
        {'idNum': '46', 'name': '赵柳', 'onlineTime': '46', 'activeValue': '8'},
        {'idNum': '543', 'name': '西女', 'onlineTime': '65', 'activeValue': '8'},
        {'idNum': '78', 'name': '亚辉', 'onlineTime': '87', 'activeValue': '8'},
        {'idNum': '89', 'name': '呵呵', 'onlineTime': '89', 'activeValue': '8'}
      ]
    },
    'student': {
      'columns1': [
        {
          'type': 'index',
          'width': 60,
          'align': 'center'
        },
        {
          'title': '学号',
          'key': 'idNum'
        },
        {
          'title': '姓名',
          'key': 'name'
        },
        {
          'title': '在线时长',
          'key': 'onlineTime'
        },
        {
          'title': '活跃值',
          'key': 'activeValue'
        }
      ],
      data1: [
        {'idNum': '23', 'name': '我是学生', 'onlineTime': '19', 'activeValue': '8'},
        {'idNum': '15', 'name': '李四', 'onlineTime': '23', 'activeValue': '8'},
        {'idNum': '45', 'name': '王五', 'onlineTime': '32', 'activeValue': '8'},
        {'idNum': '46', 'name': '赵柳', 'onlineTime': '46', 'activeValue': '8'},
        {'idNum': '543', 'name': '西女', 'onlineTime': '65', 'activeValue': '8'},
        {'idNum': '78', 'name': '亚辉', 'onlineTime': '87', 'activeValue': '8'},
        {'idNum': '89', 'name': '呵呵', 'onlineTime': '89', 'activeValue': '8'}
      ]
    }
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.getTestDetail), 'get', function (opt) {
  let back = {
    'code': 200,
    'data': {
      chartData: {
        columns: ['课程', '百分比'],
        rows: []
      }
    },
    'msg': '获取数据有误，请联系管理员'
  }
  let param = opt.url.split("=")[1]
  if (param === '1') {
    back.data.chartData.rows = [
      {"课程": "Java","百分比": 0.32},
      {"课程": "PHP","百分比": 0.52},
      {"课程": "数据库","百分比": 0.82},
      {"课程": "Web","百分比": 0.92},
      {"课程": "Java程序","百分比": 0.12}
    ]
  }else{
    back.data.chartData.rows = [
      {"课程": "UML","百分比": 0.32},
      {"课程": "C","百分比": 0.52},
      {"课程": "数据结构","百分比": 0.82},
      {"课程": "汇编","百分比": 0.92},
      {"课程": "C++","百分比": 0.12}
    ]
  }
  return back
})
Mock.mock(new RegExp(Api.getScatterData), 'get', {
  'code': 200,
  'data': {
    chartData: {
      columns: ['日期', '分数', '人数'],
      rows: {
        Java: [
          {"日期":"1/1","人数":123,"分数":50},
          {"日期":"1/2","人数":90,"分数":60},
          {"日期":"1/3","人数":80,"分数":70},
          {"日期":"1/4","人数":70,"分数":80},
          {"日期":"1/5","人数":60,"分数":90},
        ],
        "大数据": [
          { "日期": "1/1", "人数": 84, "分数": 55 },
          { "日期": "1/2", "人数": 20, "分数": 60 },
          { "日期": "1/3", "人数": 30, "分数": 20 },
          { "日期": "1/4", "人数": 70, "分数": 75 },
          { "日期": "1/5", "人数": 100,"分数": 80 }
        ],
      }
    }
  },
  'msg': '获取数据有误，请联系管理员'
})
Mock.mock(new RegExp(Api.testDetail), 'get', {
  'code': 200,
  'data': {
    chartData: {
      columns: ['日期', '智能评测', '手动打分', '批阅实验总数'],
      rows: [
        {'日期': '1/1','智能评测':90,'手动打分':20,'批阅实验总数':30},
        {'日期': '2/1','智能评测':50,'手动打分':30,'批阅实验总数':670},
        {'日期': '3/1','智能评测':30,'手动打分':60,'批阅实验总数':32},
        {'日期': '4/1','智能评测':95,'手动打分':10,'批阅实验总数':330},
        {'日期': '5/1','智能评测':82,'手动打分':10,'批阅实验总数':40},
        {'日期': '6/1','智能评测':19,'手动打分':20,'批阅实验总数':320},
        {'日期': '7/1','智能评测':95,'手动打分':24,'批阅实验总数':130}
      ]
    }
  },
  'msg': '获取数据有误，请联系管理员'
})
