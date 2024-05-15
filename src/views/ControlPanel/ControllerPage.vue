<script lang="ts" setup>
import ControllerTop from "../../components/ControllerComponents/ControllerTop.vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import {gsap} from "gsap";
import {UploadFile} from "element-plus";
const loading = ref(true)
const loading_2 = ref(true)
const pageTitle = ref('OCR识别')
const pageInfo = ref('基于行业前沿深度学习技术，提供通用网络文字、' +
    '手写体、繁体字、艺\n' +
    '术字、竖体、斜体识别能力，有效辅助提升内容风控识别能力'
)
const abailty = ref('识别能力')
const playGround = ref('OCR能力体验区')
const value = ref()

const imgUrl = ref([
  {
    id: 1,
    url: 'src/assets/image/a-1.jpg',
    info: '钢印识别'
  },
  {
    id: 2,
    url: 'src/assets/image/a-2.jpg',
    info: '钢印识别'
  },
  {
    id: 3,
    url: 'src/assets/image/a-3.jpg',
    info: '钢印识别'
  },
  {
    id: 4,
    url: 'src/assets/image/a-4.jpg',
    info: '钢印识别'
  },
  {
    id: 5,
    url: 'src/assets/image/a-5.jpg',
    info: '钢印识别'
  },
  {
    id: 6,
    url: 'src/assets/image/a-6.png',
    info: '钢印识别'
  }
])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  },3000)
  setTimeout(() => {
    loading_2.value = false
  },3500)
})

</script>

<template>
  <div class="block relative bg-[#F7F9FA] overflow-y-scroll none-scroll w-screen h-screen">
    <ControllerTop />
    <div class="w-2/3 h-full mx-auto relative block mt-14">
      <div class="w-full h-[200px] relative block">
        <el-skeleton
            animated
            :rows="5"
            :loading="loading"
        >
          <div class="w-full h-full relative p-4 block">
            <div class="w-full h-10 leading-10 relative block text-black font-bold text-left text-[30px]">{{pageTitle}}</div>
            <div class="w-1/2 h-20 relative block text-ellipsis whitespace-pre-line overflow-hidden leading-10 text-black text-[15px]">
              {{pageInfo}}
            </div>
            <div class="w-auto h-auto relative block">
              <el-button type="primary" plain>了解更多</el-button>
            </div>
            <el-divider direction="horizontal" />
          </div>
        </el-skeleton>
      </div>
      <div class="w-full h-[200px] relative block">
        <el-skeleton
            animated
            :rows="6"
            :loading="loading"
        >
          <div class="w-full h-full p-4 relative block overflow-hidden">
            <div class="w-full h-8 relative leading-8 text-black text-[20px] font-bold">
              {{abailty}}
            </div>
            <div class="w-full card ability relative flex justify-between">
              <!-- 功能卡片 -->
              <div v-for="item in imgUrl" :key="item" class="w-[100px] ability relative block rounded-md overflow-hidden">
                <img :src="item.url" alt="" class="w-full h-[100px] relative block object-cover">
                <div style="height: calc(100% - 100px)" class="w-full relative text-left text-[15px]">{{item.info}}</div>
              </div>
            </div>
          </div>
        </el-skeleton>
      </div>
      <div class="w-full relative block function">
        <el-skeleton
            animated
            :rows="7"
            :loading="loading_2"
        >
          <div class="w-full h-full p-4 relative block overflow-hidden">
            <div class="block relative w-full h-8 leading-8 text-black text-left font-bold text-[20px]">
              {{playGround}}
            </div>
            <!-- 产品展示区 -->
            <div class="w-full select relative grid grid-cols-2 gap-2">
              <!-- 介绍图片 -->
              <div class="w-full h-full relative block">
                <img src="https://picsum.photos/200/300?5" alt="" loading="lazy" class="w-full h-[380px] relative block rounded-md overflow-hidden">
              </div>
              <div class="w-full h-full relative block">
                <el-card
                    class="w-full h-full relative block overflow-hidden"
                >
                  <template #header>
                    <span class="font-bold">汽车工业场景</span>
                  </template>
                  <div class="w-full h-auto relative block">
                    <p class="text-black text-[15px] font-bold">优势</p>
                    <p class="w-full h-auto leading-[40px] text-ellipsis overflow-hidden whitespace-nowrap pl-4 text-black">
                      -小样本学习，无须担心商业机密泄露
                    </p>
                    <p class="w-full h-auto leading-[40px] text-ellipsis overflow-hidden whitespace-nowrap pl-4 text-black">
                      -泛化能力强，少量样本学习也能达到高精度
                    </p>
                    <p class="w-full h-auto leading-[40px] text-ellipsis overflow-hidden whitespace-nowrap pl-4 text-black">
                      -远程部署，弹性扩容，开箱即用，使用方便
                    </p>
                  </div>
                  <div class="w-full h-auto relative flex justify-center">
                    <el-button type="danger" class="w-full h-auto relative block">联系我们</el-button>
                  </div>
                </el-card>
              </div>
            </div>
            <div class="w-full h-8 relative block text-right leading-8 text-[10px] text-[#4D4D4DFF]">
              图片不代表实际使用，请以实际为准
            </div>
          </div>
        </el-skeleton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.function {
  height: 500px;
}
.ability {
  height: calc(100% - 22px);
}
.select {
  height: calc(100% - 96px);
}
.card {
  opacity: 1;
}
.none-scroll {
  scrollbar-width: none;
}
.none-scroll::-webkit-scrollbar {
  display: none;
}
</style>