<script setup>
import {gsap} from "gsap";
import {onMounted} from "vue";
import { ref } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRouter} from "vue-router";
import LayoutTop from "@/components/LayoutComponents/LayoutTop.vue";
import LayoutCarousel from "@/components/LayoutComponents/LayoutCarousel.vue";
import LayoutMenu from "@/components/LayoutComponents/LayoutMenu.vue";
import ToTop from "@/components/LayoutComponents/ToTop.vue";
const router = useRouter()
gsap.registerPlugin(ScrollTrigger)
const system_title = ref('在线检测系统')
const search_value = ref()
onMounted(() => {
  let timer = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      snap: {
        snapTo: "labels",
        duration: { min: 0.2, max: 3 },
        delay: 0.2,
      },
      scrub: 1,
      pin: true,
      start: 'top 50px',
      end: "200px",
    }
  })
  timer.addLabel('start')
      .to('.box',{
        perspective: 200,
        width: '100%',
        height: 200,
      })
})
//暂时的图片
const tempImg_1 = ref('https://picsum.photos/200/200?1')
const tempImg_2 = ref('https://picsum.photos/200/200?2')
//团队简介
const leader = ref(
    ' 学 术 职 衔 :        硕士生导师             \n' +
    '导 师 姓 名  :       郭琛                   \n' +
    '所获最高学位及单位 :  工学博士、大连交通大学 \n' +
    '职    称  :        副教授                 \n' +
    '工 作 部 门 :       大连交通大学软件学院   \n' +
    '联 系 电 话 :       15668666871            \n' +
    '电 子 邮 箱 :       gc0094@126.com         \n' +
    '研 究 方 向 :       机器学习，人工智能     ')
const member = ref(
    '大连交通大学郭院长团队      \n' +
    '组长 :                        张三\n' +
    '组员 :                        张三\n' +
    '组员 :                        张三\n' +
    '组员 :                        张三\n' +
    '组员 :                        张三\n' +
    '组员 :                        张三\n' +
    '组员 :                        张三\n'
)
//立即体验
const freeUse = () => {
  router.push('/controller')
}
</script>

<template>
  <div class="w-screen no-scrollbar h-screen relative block">
    <div class="w-full first h-full relative block bg-white">
      <LayoutTop />
      <div class="w-full mt-20 h-10 relative block leading-10 text-black text-center font-bold text-[30px]">{{system_title}}</div>
      <div class="w-2/3 h-12 relative flex mx-auto mt-14">
        <div class="w-2/3 h-full relative block">
          <LayoutMenu />
        </div>
        <div class="w-auto h-full ml-auto relative block pt-2">
          <a-input-search
              v-model:value="search_value"
              placeholder="钢印识别"
              style="width: 200px"
              bordered="false"
              allowClear
          />
        </div>
      </div>
      <LayoutCarousel />
    </div>
    <div class="w-full h-10 relative leading-10 text-center text-black text-[30px] font-bold">
      团队介绍
    </div>
    <div class="w-full second main h-full relative p-20 block">
      <div class="w-[1px] text-center bg-[#F5F5F5FF] box h-[1px] relative flex">
        <div class="hover:shadow-xl overflow-hidden rounded-md h-full shadow-lg w-[200px] relative block glass">
          <img :src="tempImg_1" alt="" class="w-full h-full relative overflow-hidden block object-cover" loading="lazy">
        </div>
        <div class="h-full text-left p-3 shadow-lg text-black text-4 leading-5 whitespace-pre-line text-ellipsis overflow-hidden w-1/2 ml-auto relative block glass">
          {{leader}}
        </div>
      </div>
      <div class="w-[1px] text-center bg-[#F5F5F5FF] box mt-10 h-[1px] relative flex">
        <div class="hover:shadow-xl overflow-hidden rounded-md h-full shadow-lg w-[200px] relative block glass">
          <img :src="tempImg_2" alt="" class="w-full h-full relative overflow-hidden block object-cover" loading="lazy">
        </div>
        <div class="h-full p-3 text-left shadow-lg text-black text-4 leading-5 whitespace-pre-line text-ellipsis overflow-hidden w-1/2 ml-auto relative block glass">
          {{member}}
        </div>
      </div>
    </div>
    <!-- 产品介绍 -->
    <div class="w-full h-full relative block overflow-hidden">
      <div class="w-full h-1/2 product-info relative block">
        <div class="w-full h-full layer relative block align-middle overflow-hidden">
          <div style="border-top: 1px solid transparent" class="w-2/3 h-full relative block m-auto">
            <div class="w-full mt-10 h-16 leading-16 text-4xl font-bold text-left text-ellipsis overflow-hidden text-white">
              钢印OCR字符识别
            </div>
            <div class="w-1/2 h-16 leading-8 text-left text-ellipsis whitespace-pre-line overflow-hidden text-white text-[20px]">
              精准识别超过十万种物体和场景，包含10余项高精度的识图能力并提供相应的API服务，充分满足各类开发者和企业用户的应用需求
            </div>
            <div class="w-full h-10 mt-4 relative flex">
              <el-button type="primary">立即选购</el-button>
              <el-button type="primary" plain @click="freeUse">立即体验</el-button>
              <el-button type="text" plain>商务合作</el-button>
              <el-button type="text">价格咨询</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-1/2 relative block">
        <!-- 商品页头 -->
        <div class="w-full h-1/3 shadow-md relative block overflow-hidden">
          <div class="flex justify-between p-3 relative w-2/3 h-full mx-auto">
            <div class="w-[150px] h-full relative block">
              <div class="w-full h-1/2 relative flex">
                <router-link to="/controller" class="w-auto h-auto relative block">
                  <div class="w-[100px] h-5 leading-5 text-center text-black font-bold">
                    功能体验
                  </div>
                </router-link>
                <span class="w-auto leading-5 relative block py-1 h-5 text-center text-[#ff3813]">HOT</span>
              </div>
              <div class="w-full h-1/2 relative block text-[#999] leading-5 text-left">
                Demo快速体验图像识别能力
              </div>
            </div>
            <el-divider style="height: 100%" direction="vertical"/>
            <div class="w-[150px] h-full relative block">
              <div class="w-full h-1/2 relative flex">
                <router-link to="/" class="w-auto h-auto relative block">
                  <div class="w-[100px] h-5 leading-5 text-center text-black font-bold">
                    优惠活动
                  </div>
                </router-link>
                <span class="w-auto leading-5 relative block py-1 h-5 text-center text-[#ff3813]">HOT</span>
              </div>
              <div class="w-full h-1/2 relative block text-[#999] leading-5 text-left">
                限时秒杀，新人1元首购专享福利！
              </div>
            </div>
            <el-divider style="height: 100%" direction="vertical"/>
            <div class="w-[150px] h-full relative block">
              <div class="w-full h-1/2 relative flex">
                <router-link to="/controller" class="w-auto h-auto relative block">
                  <div class="w-[100px] h-5 leading-5 text-center text-black font-bold">
                    专人服务
                  </div>
                </router-link>
                <span class="w-auto leading-5 relative block py-1 h-5 text-center text-[#ff3813]">NEW</span>
              </div>
              <div class="w-full h-1/2 relative block text-[#999] leading-5 text-left">
                专人协助，当天部署
              </div>
            </div>
            <el-divider style="height: 100%" direction="vertical"/>
            <div class="w-[150px] h-full relative block">
              <div class="w-full h-1/2 relative flex">
                <router-link to="/buyer" class="w-auto h-auto relative block">
                  <div class="w-[100px] h-5 leading-5 text-center text-black font-bold">
                    客户案例
                  </div>
                </router-link>
              </div>
              <div class="w-full h-1/2 relative block text-[#999] leading-5 text-left">
                大众一汽发动机（大连）有限公司
              </div>
            </div>
          </div>
        </div>
        <!-- 应用场景 -->
        <div class="w-full h-2/3 relative block">
          <div class="w-2/3 h-full relative flex p-3 mx-auto">
            <div class="w-2/3 h-full relative block">
              <div class="w-full h-1/3 relative block text-left font-bold text-[20px] whitespace-pre-line text-ellipsis overflow-hidden text-black">
                应用场景
              </div>
              <div class="w-full h-2/3 relative block text-left whitespace-pre-line text-ellipsis overflow-hidden text-black">
                在汽车、铸造、冶金等行业中常会用到钢印技术，钢印字符主要应用于各类硬质外表面上，多具有字符与背景颜色相近、
                背景易反光、字符印迹不明显、字符倾斜等特征。因此，使用传统方法对钢印字符进行检测时，
                容易受到各类因素的干扰导致检测准确率低。与市面上的各种识别算法进行了实验与比较，
                最终本项目在Faster RCNN模型的基础进行了进一步的改进，是其能够准确识别印迹不明显的字符。
                随着样本集的不断增加，准确率可达90%以上。
              </div>
            </div>
            <div class="w-1/3 h-full relative block">
              <img src="../../assets/image/a-5.jpg" alt="" class="w-full h-full relative block object-contain">
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-divider direction="horizontal" />
    <!-- 合作案例 -->
    <div class="w-full h-[300px] relative block">
      <div class="w-2/3 h-full relative block mx-auto">
        <div class="w-full h-1/4 relative block text-left font-bold text-[20px] text-black px-3">
          合作案例
        </div>
        <div class="w-full h-3/4 relative block">
          <router-link to="/buyer" class="w-auto h-auto">
            <div class="logo w-[150px] h-[150px] relative block">
              <img src="https://www.icauto.com.cn/car/images/202006/2020060112000047bdd2db81357.jpg" alt="" class="w-full h-full object-contain relative block overflow-hidden">
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <ToTop class="top" />
  </div>
</template>

<style scoped>
.top {
  color: #181818;
}
.main {
  opacity: 1;
}
.box {
  opacity: 1;
  background-color: #fff;
}
.layer {
  background-color: rgba(34, 34, 34, 0.2);
}
.logo {
  border: 1px solid rgba(105, 105, 105, 0.5);
}
.first {
  border-top: 1px solid transparent;
}
.second {
  color: #181818;
}
.glass {
  background: rgba(255, 255, 255, 0.11);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(255, 255, 255, 0.21);
}
.product-info {
  background-image: url("https://ai.bdstatic.com/file/A94E0C40C934403B93FBBE81BF83AD62");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>