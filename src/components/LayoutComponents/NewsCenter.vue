<script setup>
import { useRouter} from "vue-router";
import { ref } from "vue";
import {Timer} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";
const router = useRouter()
const jumpToNews = () => {
  router.push('/news')
}
//新闻暂时填充
const info = ref([
  {
    id: 1,
    title: '戴琼海院士主持的系列交叉论坛第76期今晚19:30准时线上开播，欢迎观看',
    information: '报告嘉宾：\n' +
        '            程学旗    中国科学院计算技术研究所副所长、智能算法安全重点实验室主任、研究员\n' +
        '            报告题目：\n' +
        '            数据基础设施及大数据分析系统实践\n' +
        '\n' +
        '            观看链接：\n' +
        '            PC端点击链接：https://shangzhibo.tv/watch/11173647'
  },
  {
    id: 2,
    title: '团队内部新闻',
    information: '通报：2023年，团队已发表高水平SCI 一区论文1篇，2区论文1篇，1篇SCI顶刊正在大修，顺利的话2024年底将会大概率录用。\n' +
        '\t2024年计划发表高水平论文2区以上2篇，发明专利2项，\n' +
        '省级以上项目至少1项。我们正在向大连市揭榜挂帅，省科技厅，\n' +
        '科技部，工信部的重大专项发力，今年还将申报国自然等项目。我们将全面和西工大进行合作，\n' +
        '将和浙江交通研究院，北京交通研究院开启合作，将和大连理工大学，青岛四方、连山集团等校企进行不同层面合作，\n' +
        '希望大家在这些合作中都能发挥各自所长，贡献力量。',
  },
  {
    id: 3,
    title: '大连1号—连理卫星在轨释放圆满成功！',
    information: '大连1号—连理卫星重约17kg，主要任务是验证基于OpenHarmony的实时操作系统、 \n' +
        '基于金属3D打印技术的超轻型微纳卫星部署器、亚米级对地遥感成像、 \n' +
        '先进绿色无毒HAN推进系统以及高性能卫星部组件等一系列创新技术。 \n' +
        '我们计划将和理工大学在基于Open Harmony实时操作系统的应用层面进行项目合作， \n' +
        '面向AIoT，机器人和AIGC，做好垂直领域的问题解决。',
  },
  {
    id: 4,
    title: '大连1号—连理卫星在轨释放圆满成功！',
    information: '大连1号—连理卫星重约17kg，主要任务是验证基于OpenHarmony的实时操作系统、 \n' +
        '基于金属3D打印技术的超轻型微纳卫星部署器、亚米级对地遥感成像、 \n' +
        '先进绿色无毒HAN推进系统以及高性能卫星部组件等一系列创新技术。 \n' +
        '我们计划将和理工大学在基于Open Harmony实时操作系统的应用层面进行项目合作， \n' +
        '面向AIoT，机器人和AIGC，做好垂直领域的问题解决。',
  }
])
//jump to news
const jump = (current) => {
  router.push('/news');
  ElMessage({
    type: 'success',
    message: `新闻中心 + ${current}`,
  })
}
</script>

<template>
  <div class="w-full h-auto relative block overflow-hidden mb-10 p-4">
    <div class="w-2/3 h-full relative block overflow-hidden mx-auto">
      <div class="w-full h-10 leading-10 text-left px-4 font-bold text-black text-[25px] overflow-hidden">
        新闻
      </div>
      <el-divider direction="horizontal" style="margin-top: 5px;margin-bottom: 5px" />
      <div class="w-full h-screen relative grid grid-rows-4 gap-3 overflow-hidden">
        <el-card
            v-for="item in info"
            :key="item"
            class="w-full h-auto relative block hover:shadow-lg"
        >
          <template #header>
            <div class="w-full h-auto relative justify-between flex">
              <span @click="jump(current)" class="hover:text-[#409EFF] cursor-pointer font-bold w-auto h-auto">{{ item.title }}</span>
              <div class="relative flex w-auto">
                <el-icon><Timer /></el-icon>
                <span class="text-blue-400 ml-4">2024-08-13</span>
              </div>
            </div>
          </template>
          <div class="w-full max-h-[56px] relative block text-black leading-7 text-ellipsis overflow-hidden whitespace-pre-line">
            {{ item.information }}
          </div>
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