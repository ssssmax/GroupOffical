<script setup>
import { ref } from "vue";
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import {watch} from "vue";
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
const backHome = () => {
  router.push('/')
}
const jumpToNews = () => {
  router.push('/news')
}
const jumpToProject = () => {
  router.push('/project')
}
//高亮持久化
const isLayout = () => {
  switch (route.fullPath){
    case '/':
      active.value = '1'
          break;
    case '/news':
      active.value = '3'
          break;
    case '/project':
      active.value = '2'
          break;
  }
}
onMounted(() => {
  isLayout()
})
watch(() => route.fullPath,() => {
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
    <el-menu-item index="1" @click="backHome">首页</el-menu-item>
    <el-menu-item index="2" @click="jumpToProject">研究课题</el-menu-item>
    <el-menu-item index="3" @click="jumpToNews">新闻中心</el-menu-item>
    <el-menu-item index="4" @click="jumpToControl">在线体验</el-menu-item>
    <el-menu-item index="5">联系我们</el-menu-item>
  </el-menu>
</template>

<style scoped>

</style>