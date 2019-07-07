<template>
    <div>
      我是Vuex测试页
      {{storeA}}
      <Input v-model="aaa"/>
      <Button  @click="aaaChange">点我</Button >
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'storeTest',
  data: function () {
    return {
      aaa: ''
    }
  },
  computed: {
    ...mapState({
      storeA: state => state.storeTest
    })
  },
  methods: {
    ...mapActions(['save_storeTest']),
    aaaChange () {
      this.save_storeTest(this.aaa)
      this.$router.push('/storeShow')
    }
  },
  mounted () {
    this.save_storeTest('我现在变了')
  }
}
</script>

<style scoped>

</style>
