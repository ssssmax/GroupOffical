<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {ElMessage} from "element-plus";
//项目介绍暂时填充图片
const temp = ref([
  {
    id: 1,
    url: 'src/assets/image/pj1.jpg'
  },
  {
    id: 2,
    url: 'src/assets/image/pj2.jpg'
  },
  {
    id: 3,
    url: 'src/assets/image/pj3.jpg'
  },
  {
    id: 4,
    url: 'src/assets/image/pj4.jpg'
  }
])
//router
const router = useRouter();
//跳转研究计划详情页
const jumpTo = (current) => {
  router.push('/project');
  ElMessage({
    type: "success",
    message: `研究课题 + ${current}`
  })
}
</script>

<template>
  <div class="w-full h-[250px] relative block p-4">
    <div class="w-2/3 h-full relative block mx-auto">
      <div class="w-full h-10 relative block px-4 overflow-hidden font-bold leading-10 text-left text-black text-[25px]">
        研究课题
      </div>
      <el-divider style="margin-top: 5px;margin-bottom: 5px" direction="horizontal" />
      <div style="height: calc(100% - 52px)" class="w-full grid grid-cols-4 gap-3 relative overflow-hidden">
        <div @click="jumpTo(item.id)" v-for="item in temp" :key="item" class="w-full project box-border h-full cursor-pointer relative block rounded-[5px] overflow-hidden">
          <img :src="item.url" alt="" class="w-full h-full relative block overflow-hidden object-cover" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  border: 1px solid transparent;
}
.project:hover {
  border-color: #409EFF;
  transition: all 0.2s ease-in;
}
</style>