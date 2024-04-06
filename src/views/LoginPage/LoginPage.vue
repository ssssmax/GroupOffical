<script lang="ts" setup>
import { ref,reactive } from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import {useRouter} from "vue-router";
const router = useRouter()
const pageDown = ref('©2024版权所有 DJTU xxxxxxxxxx')
const title = ref('xxx账号')
const text= ref('https://www.baidu.com')
const statue = ref('expired')
const activeName = ref('first')
//登录表单校验
const ruleFormRef = ref<FormInstance>()
const loading = ref(false)


const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    if (ruleForm.username !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkName', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  }else {
    callback()
  }
}

const ruleForm = reactive({
  username: '',
  password: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{ validator: validatePass, trigger: 'blur' }],
  password: [{ validator: validatePass2, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  loading.value = true
  formEl.validate((valid) => {
    if (valid) {
      setTimeout(() => {
        router.replace('/')
        loading.value = false
      },3000)
      console.log('submit!')
    } else {
      loading.value = false
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}


</script>

<template>
  <div class="w-screen relative h-screen flex overflow-hidden bg-white">
    <div class="w-1/2 h-full relative block">
      <img src="../../assets/image/log.png" alt="" class="w-full h-full relative block object-cover">
      <div class="w-full h-1/4 absolute bottom-0 block">
        <div class="w-full h-8 leading-8 relative block text-[15px] text-[#4D4D4DFF] text-center">
          {{pageDown}}
        </div>
      </div>
    </div>
    <div class="w-1/2 relative p-10 overflow-hidden block h-full">
      <div class="w-full h-full flex relative align-middle justify-center">
        <div class="w-full h-[350px] relative block my-auto">
          <div class="w-full h-8 leading-8 text-center text-black text-[30px] font-bold">
            {{title}}
          </div>
          <div class="w-full h-full py-14 content relative flex">
            <div class="w-[160px] h-full block justify-center align-middle text-center">
              扫码登录
              <a-qrcode :value="text" :status="statue" />
            </div>
            <el-divider direction="vertical" style="height: 100%" />
            <div class="login h-full relative block">
              <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="账户登录" name="first">
                  <el-form
                      ref="ruleFormRef"
                      style="max-width: 600px"
                      :model="ruleForm"
                      status-icon
                      :rules="rules"
                      label-width="auto"
                      class="demo-ruleForm"
                  >
                    <el-form-item label="用户名" prop="username">
                      <el-input v-model="ruleForm.username" placeholder="请输入用户名" clearable autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                      <el-input
                          v-model="ruleForm.password"
                          type="password"
                          autocomplete="off"
                          placeholder="请输入验证码"
                      />
                    </el-form-item>
                    <el-form-item>
                      <el-button loading-icon="Loading" :loading="loading" type="primary" @click="submitForm(ruleFormRef)">
                        登录
                      </el-button>
                      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="短信登录" name="second">

                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  height: calc(100% - 32px);
}
.login {
  width: calc(100% - 160px);
}
</style>