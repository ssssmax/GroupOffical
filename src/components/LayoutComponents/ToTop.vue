<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // 当网页向下滑动 20px 出现"返回顶部" 按钮
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
})
// 点击按钮，返回顶部
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <div id="myBtn" class="w-[30px] h-[30px] rounded-[15px] justify-center align-middle overflow-hidden fixed hidden bottom-5 right-5 bg-white shadow-lg">
    <el-tooltip
        class="box-item"
        effect="dark"
        content="返回顶部"
        placement="left"
    >
      <el-button round class="w-full h-full relative block" icon="Top" @click="topFunction" />
    </el-tooltip>
  </div>
</template>

<style scoped>

</style>