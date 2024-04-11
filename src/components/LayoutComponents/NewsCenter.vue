<script setup>
import { useRouter} from "vue-router";
import {Timer} from "@element-plus/icons-vue";
const router = useRouter()
const jumpToNews = () => {
  router.push('/news')
}
</script>

<template>
  <div class="w-full h-[140%] relative block overflow-hidden mb-10 p-4">
    <div class="w-2/3 h-full relative block overflow-hidden mx-auto">
      <div class="w-full h-10 leading-10 text-left px-4 font-bold text-black text-[25px] overflow-hidden">
        新闻
      </div>
      <el-divider direction="horizontal" style="margin-top: 5px;margin-bottom: 5px" />
      <div style="height: calc(100% - 52px)" class="w-full relative grid grid-rows-4 gap-3 overflow-hidden">
        <el-card
            v-for="item in 4"
            :key="item"
            class="w-full h-full relative block hover:shadow-lg"
        >
          <template #header>
            <span class="hover:text-[#409EFF] cursor-pointer">基于xxxx的研究</span>
          </template>
          <div class="w-full h-[50px] relative block text-black leading-4 text-ellipsis overflow-hidden whitespace-pre-line">
            精准识别超过十万种物体和场景，包含10余项高精度的识图能力并提供相应的API服务，充分满足各类开发者和企业
          </div>
          <template #footer>
            <div class="w-auto h-auto relative flex">
              <el-icon class="my-auto"><Timer /></el-icon>
              <span class="text-blue-400 ml-4">2024-08-13</span>
            </div>
          </template>
        </el-card>
        <!-- 遮罩 -->
        <div style="background: linear-gradient(transparent 50%, rgba(154,154,154,0.7));" class="w-full h-[200px] absolute bottom-0 z-[199]">

        </div>
        <div class="w-full h-10 relative flex justify-center">
          <el-button type="primary" class="z-[200] my-auto" round size="default" @click="jumpToNews">更多新闻</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>