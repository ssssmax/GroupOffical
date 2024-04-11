<script setup>
import { ref } from "vue";
import LayoutTop from "@/components/LayoutComponents/LayoutTop.vue";
import LayoutMenu from "@/components/LayoutComponents/LayoutMenu.vue";
//用来填充的文字
const content = ref('Nowadays, some universities in China ' +
    'has been forbidden to use product by MATHWORK, e.g. Matlab.' +
    ' Many professors and students were complaining about the decision ' +
    'because they use Matlab daily for their research and homework. Well, ' +
    'although we have alternative programming choice like C++ and python, ' +
    'Matlab do really has its own irreplacable good characteristics in computation ' +
    'and simulation. Under this circumstance, Julia was developed as an open source,' +
    ' free computation language to replace Matlab. Users can easily use it with ' +
    'different IDE like vscode and ATOM. In this article, we want to introduce' +
    ' some basic usage of it and compare the performance with different languages.'
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
          <span class="hover:text-[#409EFF] cursor-pointer">Intelligent Robot Control Systems</span>
        </template>
        <!-- 项目介绍 -->
        <div class="w-full h-auto relative grid grid-cols-2 gap-3">
          <div class="w-full h-full relative block">
            <img src="https://picsum.photos/200/200?1" alt="" class="w-full h-[170px] relative block object-cover" loading="lazy">
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
                    <img src="https://picsum.photos/200/200?2" alt="" class="w-full h-[200px] relative block object-cover" loading="lazy">
                    <div style="height: calc(100% - 200px)" class="w-full relative block text-black px-4 text-left text-[20px]">
                      张三
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