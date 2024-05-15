<script setup>
import {useRoute} from "vue-router";
import { ref } from "vue";
import {onMounted} from "vue";
import {watchEffect} from "vue";
const route = useRoute()
//持久化选中菜单
const current = ref()
const getRoute = () => {
  switch (route.fullPath){
    case '/controller':
      current.value = route.fullPath
          break;
    case '/':
      current.value = route.fullPath
          break;
    case '/buyer':
      current.value = route.fullPath
          break;
  }
}
onMounted(() => {
  getRoute()
})
watchEffect(route.fullPath,() => {
  getRoute()
})
</script>

<template>
  <div class="fixed top-0 z-10 shadow-md justify-center left-0 flex bg-white w-full h-14">
    <div class="w-2/3 h-full relative block bg-red-950">
      <el-menu
          :default-active="current"
          active-text-color="#1E90FFFF"
          mode="horizontal"
          router
          style="border-bottom: none;height: 56px"
      >
        <el-menu-item index="/controller">
          产品介绍
        </el-menu-item>
        <el-menu-item index="/">
          首页
        </el-menu-item>
        <el-menu-item index="/buyer">
          用户案例
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>

</style>