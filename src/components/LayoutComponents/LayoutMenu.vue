<script setup>
import { ref } from "vue";
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import {watchEffect} from "vue";
import {useRoute} from "vue-router";
const router = useRouter()
const route = useRoute()
const active = ref('1')
const jumpToControl = () => {
  router.push('/controller')
}
const jumpToLog = () => {
  router.push('/login')
}
const jumpToBottom = () => {
  window.scrollTo(0,0)
  window.scrollTo(0,document.documentElement.scrollHeight)
}
const isLayout = () => {
  switch (route.fullPath){
    case '/':
      active.value = '1'
  }
}
onMounted(() => {
  isLayout()
})
watchEffect(route.fullPath,() => {
  isLayout()
})
</script>

<template>
  <el-menu
      :default-active="active"
      class="w-full relative block border-0"
      style="height: 48px;border-bottom: none"
      mode="horizontal"
  >
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2" @click="jumpToLog">用户登录</el-menu-item>
    <el-menu-item index="3" @click="jumpToBottom">商品介绍</el-menu-item>
    <el-menu-item index="4" @click="jumpToControl">在线体验</el-menu-item>
    <el-menu-item index="5">联系我们</el-menu-item>
  </el-menu>
</template>

<style scoped>

</style>