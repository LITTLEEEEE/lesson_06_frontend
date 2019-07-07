<template>
    <div>
      我是store取值展示页
      {{storeA}}
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'storeShow',
  computed: {
    ...mapState({
      storeA: state => state.storeTest
    })
  }
}
</script>

<style scoped>

</style>
