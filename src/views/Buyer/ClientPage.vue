<script setup>

import ControllerTop from "@/components/ControllerComponents/ControllerTop.vue";
</script>

<template>
  <div class="w-screen h-screen relative block overflow-x-hidden">
    <ControllerTop />
    <div class="flex relative w-full h-full">
      <div class="w-1/3 h-full relative block">
        <div class="w-[200px] h-[200px] relative block mt-20 bg-amber-300 mx-auto">
          <img src="https://www.icauto.com.cn/car/images/202006/2020060112000047bdd2db81357.jpg" alt="" class="w-full h-full object-contain relative block overflow-hidden">
        </div>
        <div class="w-[200px] h-10 relative block mx-auto">
          <div class="w-full h-10 leading-5 whitespace-pre-line text-ellipsis mt-4 text-left text-black font-bold text-[20px]">
            大众一汽发动机（大连）有限公司
          </div>
        </div>
        <div class="w-[200px] h-[160px] mx-auto mt-4 relative block overflow-hidden text-[15px] text-black whitespace-pre-line leading-4 text-left">
          大众一汽发动机（大连）有限公司位于大连市经济技术开发区黄海中路，是大众公司与一汽集团的合资公司。
          大众一汽发动机（大连）有限公司总投资额约为15亿人民币，是由大众汽车集团和中国一汽共同兴建的合资企业，
          其中大众汽车占60%股份，一汽集团占40%的股份。
        </div>
        <div class="w-[200px] h-10 relative block mx-auto">
          <div class="w-full h-10 leading-5 whitespace-pre-line text-ellipsis mt-4 text-left text-black font-bold text-[20px]">
            使用产品
          </div>
        </div>
        <div class="w-[200px] h-5 text-[15px] text-black relative block text-left mx-auto leading-5">
          <router-link to="/controller" class="w-auto h-auto relative block">
            OCR钢印识别
          </router-link>
        </div>
      </div>
      <div class="w-2/3 h-full relative block">
        <div class="w-full h-10 mt-20 font-bold relative leading-10 text-left text-ellipsis overflow-hidden whitespace-nowrap text-2xl">
          流水线智能化升级，AI使能千行百业
        </div>
        <div class="w-full h-5 leading-5 mt-10 text-left text-ellipsis overflow-hidden whitespace-nowrap text-black text-xl">
          价值成果
        </div>
        <div class="w-2/3 h-auto text-black text-[15px] leading-5 whitespace-pre-line text-ellipsis mt-5 relative block bg-[#F5F5F5FF] p-3">
          大众一汽发动机（大连）有限公司接入大连交大AI团队（以下简称大交）技术，成功搭建“AI智能流水线”功能模块。
          大交AI识别技术，助力工业流水线实现“高效质检”，用户可根据个人需求，
          录入产品图片，即可获取钢印识别。
          自大众一汽发动机（大连）有限公司功能上线，已经过上百小时生产考验，用户反响佳。
          促进平台良品率提升20%以上。
        </div>
        <div class="w-full h-5 leading-5 mt-10 text-left text-ellipsis overflow-hidden whitespace-nowrap text-black text-xl">
          案例故事
        </div>
        <div class="w-full h-5 leading-5 mt-10 text-left text-ellipsis overflow-hidden whitespace-nowrap text-gray-800 text-[15px]">
          核心诉求
        </div>
        <div class="w-2/3 h-auto text-black text-[15px] leading-5 whitespace-pre-line text-ellipsis mt-5 relative block bg-[#F5F5F5FF] p-3">
          项目目标，在车间的短发装配线的某xx工位、某xxx工位、某xxxx工位安装AI视觉识别系统，
          用以识别发动机纸质条码的正确性，以及发动机缸盖码、缸盖罩盖码是否一致。
        </div>
        <div class="w-full h-5 leading-5 mt-10 text-left text-ellipsis overflow-hidden whitespace-nowrap text-gray-800 text-[15px]">
          解决方案
        </div>
        <div class="w-2/3 h-auto text-black text-[15px] leading-5 whitespace-pre-line text-ellipsis mt-5 relative block bg-[#F5F5F5FF] p-3">
          在汽车、铸造、冶金等行业中常会用到钢印技术，钢印字符主要应用于各类硬质外表面上，
          多具有字符与背景颜色相近、背景易反光、字符印迹不明显、字符倾斜等特征。
          因此，使用传统方法对钢印字符进行检测时，容易受到各类因素的干扰导致检测准确率低。
          与市面上的各种识别算法进行了实验与比较，最终本项目在Faster RCNN模型的基础进行了进一步的改进，
          是其能够准确识别印迹不明显的字符。随着样本集的不断增加，准确率可达90%以上。
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>