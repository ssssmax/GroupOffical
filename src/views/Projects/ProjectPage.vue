<script setup>
import { ref } from "vue";
import LayoutTop from "@/components/LayoutComponents/LayoutTop.vue";
import LayoutMenu from "@/components/LayoutComponents/LayoutMenu.vue";
//用来填充的文字
const content = ref('钢印字符主要应用于各类硬质外表面上，如汽车、铸造、冶金等产品的外表、纸张、玻璃、玻璃纤维等' +
    '钢印字符的制造技术和应用技术日新月异，具有字符与背景颜色相近、 背景易反光、字符印迹不明显、字符倾斜等特征' +
    '因此，使用传统方法对钢印字符进行检测时， 容易受到各类因素的干扰导致检测准确率低。' +
    '与市面上的各种识别算法进行了实验与比较， 最终本项目在Faster RCNN模型的基础进行了进一步的改进' +
    '使其能够准确识别印迹不明显的字符。 随着样本集的不断增加，准确率可达90%以上。' 
)
</script>

<template>
  <div class="w-screen h-screen relative block bg-white overflow-y-scroll">
    <!-- 顶部导航栏 -->
    <LayoutTop />
    <!-- 顶部标题栏 -->
    <div class="w-2/3 h-[100px] relative block mx-auto mt-20 overflow-hidden">
      <div class="w-full h-10 leading-10 relative block text-[30px] font-bold text-black text-center">
        研究课题
      </div>
      <div style="height: calc(100%- 52px)" class="w-full relative flex">
        <LayoutMenu />
      </div>
      <el-divider style="margin-top: 5px;margin-bottom: 5px" direction="horizontal" />
    </div>
    <!-- 正文部分 -->
    <div class="w-2/3 relative mx-auto none-scroll block overflow-y-scroll">
      <el-card v-for="item in 5" :key="item" class="w-full h-auto relative mb-4 block">
        <template #header>
          <span class="hover:text-[#409EFF] cursor-pointer">在线钢印文字检测项目</span>
        </template>
        <!-- 项目介绍 -->
        <div class="w-full h-auto relative grid grid-cols-2 gap-3">
          <div class="w-full h-full relative block">
            <img src="@/assets/image/pj3.jpg" alt="" class="w-full h-[170px] relative block object-cover" loading="lazy">
          </div>
          <div class="w-full h-full pb-4 relative block whitespace-pre-line text-black text-ellipsis overflow-hidden leading-4">
            {{content}}
          </div>
        </div>
        <!-- 详细介绍 -->
        <el-collapse>
          <el-collapse-item title="详细信息">
            <div class="w-full h-[300px] relative block">
              <!-- 参与者 -->
              <div class="w-full h-full relative block">
                <div class="w-full h-10 leading-10 relative block text-left text-black font-bold text-[25px] px-4">
                  参与成员
                </div>
                <div style="height: calc(100% - 40px)" class="w-full relative flex">
                  <!-- 成员 -->
                  <div v-for="item in 4" :key="item" class="w-[200px] bg-[#EDF2F6] h-full relative block rounded-md overflow-hidden mr-4">
                    <img src="@/assets/image/team.jpg" alt="" class="w-full h-[200px] relative block object-cover" loading="lazy">
                    <div style="height: calc(100% - 200px)" class="w-full relative block text-black px-4 text-left text-[20px]">
                      张力
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/temp.css";
</style>