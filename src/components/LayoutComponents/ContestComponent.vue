<script setup>

</script>

<template>
  <div class="w-full h-[250px] relative block">
    <div class="w-2/3 mx-auto h-full relative block">
      <div class="w-full h-10 relative block text-left px-4 leading-10 text-black font-bold text-[25px]">
        竞赛专栏
      </div>
      <el-divider style="margin-top: 5px;margin-bottom: 5px" direction="horizontal" />
      <div style="height: calc(100% - 52px)" class="w-full relative block overflow-hidden">
        <el-card
            class="w-full h-auto relative block"
        >
          <template #header>
            <span class="hover:text-[#409EFF] cursor-pointer">工程实践与创新能力大赛本科生竞赛队员招募!(点击阅读更多)</span>
          </template>
          <div class="w-full h-auto max-h-[100px] relative block whitespace-pre-line text-ellipsis overflow-hidden text-black">
            Students who are interested in working with networked systems — in
            particular, multi-agent cooperation, robot hardware and algorithm
            design, distributed optimization and learning, privacy and security
            of networked systems — are warmly encouraged to apply.
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>