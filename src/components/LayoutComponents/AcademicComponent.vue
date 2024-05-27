<script setup>

</script>

<template>
  <div class="w-full h-[250px] relative block mt-10">
    <div class="w-2/3 h-full mx-auto relative block overflow-hidden">
      <div class="w-full h-10 relative block px-4 leading-10 text-left text-black font-bold text-[25px]">
        学术活动
      </div>
      <el-divider direction="horizontal" style="margin-top: 5px;margin-bottom: 5px" />
      <div style="height: calc(100% - 52px)" class="w-full relative grid grid-cols-2 gap-3">
        <el-card
            class="w-full h-full relative block"
            v-for="item in 2"
            :key="item"
        >
          <template #header>
            <span class="hover:text-[#409EFF] cursor-pointer">ACAIT 2024征稿通知</span>
          </template>
          <div class="w-full h-auto max-h-[100px] relative block text-ellipsis overflow-hidden whitespace-pre-line text-black leading-4">
            中国人工智能学会将于2024年11月8-10日在福建福州召开“第八届亚洲人工智能技术大会(ACAIT 2024)<br>大会仅接收英文稿件，投稿请参照IEEE Conference Proceedings模板：https://www.ieee.org/conferences/publishing/templates.html
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>