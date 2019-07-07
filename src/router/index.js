import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import main from '@/containers/Main'
import propFather from '@/components/PropFather.vue'
import SubmitTest from '@/components/SubmitTest.vue'
import EchartsTest from '@/components/EchartsTest.vue'
import storeTest from '@/components/storeTest.vue'
import storeShow from '@/components/storeShow.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/propFather',
      name: 'propFather',
      component: propFather
    },
    {
      path: '/submit',
      name: 'SubmitTest',
      component: SubmitTest
    },
    {
      path: '/echarts',
      name: 'EchartsTest',
      component: EchartsTest
    },
    {
      path: '/storeTest',
      name: 'storeTest',
      component: storeTest
    },
    {
      path: '/storeShow',
      name: 'storeShow',
      component: storeShow
    }
  ]
})
