<template>
    <div class="submit-main">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="name">
          <Input type="text" v-model="formInline.name" placeholder="name">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="text" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
      </Form>
    </div>
</template>

<script>
export default {
  name: 'SubmitTest',

  data () {
    return {
      formInline: {
        name: '',
        password: ''
      },
      ruleInline: {
        name: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    getFormData () {
      this.commonUtil.getUtil(this.globalApi.getForm, {}, res => {
        if (res.code === 200) {
          console.log(res)
          this.formInline.name = res.data.userName
          this.formInline.password = res.data.password
        } else {
          this.$Message.error(res.msg)
        }
      }, err => {
        console.log(err)
      })
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  },
  mounted () {
    this.getFormData()
  }
}
</script>

<style scoped>

</style>
