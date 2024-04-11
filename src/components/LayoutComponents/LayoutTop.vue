<script setup>
import {useRouter} from "vue-router";
import {ArrowDown} from "@element-plus/icons-vue";
const router = useRouter()
const login = () => {
  router.push('/login')
}
</script>

<template>
  <div class="w-full h-14 bg-black z-[499] shadow-lg fixed left-0 block top-0">
    <div class="w-2/3 h-full relative flex mx-auto">
      <div class="w-auto h-full flex relative">
        <el-dropdown trigger="click" class="mr-4 my-auto">
          <span>
            货币
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
           </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown trigger="click" class="my-auto">
          <span>
            语言
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
           </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="w-auto h-full relative ml-auto flex">
        <el-button type="text" style="color: #606266" class="my-auto" @click="login">登录/注册</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>