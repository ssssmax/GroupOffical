<script setup>
import { ref } from "vue";
const imgUrl = ref([
  {
    id: 1,
    url: 'src/assets/image/car-1.png'
  },
  {
    id: 2,
    url: 'src/assets/image/car-2.png'
  },
  {
    id: 3,
    url: 'src/assets/image/car-3.png'
  }
])
</script>

<template>
  <div class="w-full h-2/3 absolute bottom-0 block">
    <el-carousel
        interval="5000"
        autoplay
        arrow="hover"
        height="auto"
    >
      <el-carousel-item v-for="item in imgUrl" :key="item.id" style="height: 486px">
        <img :src="item.url" alt="" class="w-full h-[486px] relative block object-cover" loading="lazy">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.el-carousel .el-carousel__container {
  height: 100%;
}
</style>