import {createRouter, createWebHashHistory} from 'vue-router'
import LayoutPage from "@/views/Layout/LayoutPage.vue";
import NProgress from 'nprogress'
import ControllerPage from "@/views/ControlPanel/ControllerPage.vue";
import LoginPage from "@/views/LoginPage/LoginPage.vue";
import ClientPage from "@/views/Buyer/ClientPage.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutPage
    },
    {
      path: '/controller',
      name: 'ControllerPage',
      component: ControllerPage
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/buyer',
      name: 'buyer',
      component: ClientPage
    }
  ]
})
router.beforeEach(async () => {
  // 开启进度条
  NProgress.start();
})

// 页面路由切换完毕的时候
router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
export default router
