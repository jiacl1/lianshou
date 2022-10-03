import Vue from "vue";
import VueRouter from "vue-router";

// 引入vant组件
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(VueRouter);

//使用vant组件
Vue.use(Vant);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    // 注册界面
    {
      path: "/zhuce",
      name: "Zhuce",
      component: () => import("../pages/Zhuce"),
      meta: {
        showFooter: false,
      },
    },
    // 登录界面
    {
      path: "/login",
      name: "Login",
      component: () => import("../pages/Login"),
      meta: {
        showFooter: false,
      },
    },
    // 首页界面
    {
      path: "/home",
      name: "Home",
      component: () => import("../pages/Home"),
      meta: {
        showFooter: true,
      },
    },
    // 问答界面
    {
      path: "/answer",
      name: "Answer",
      component: () => import("../pages/Answer"),
      meta: {
        showFooter: true,
      },
    },
    //咨询界面
    {
      path: "/consult",
      name: "Consult",
      component: () => import("../pages/Consult"),
      meta: {
        showFooter: true,
      },
    },
    // 消息界面
    {
      path: "/alert",
      name: "Alert",
      component: () => import("../pages/Alert"),
      meta: {
        showFooter: true,
      },
    },
    // 我的界面
    {
      path: "/mine",
      name: "Mine",
      component: () => import("../pages/Mine"),
      meta: {
        showFooter: true,
      },
    },
  ],
});

export default router;
