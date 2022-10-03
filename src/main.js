import Vue from 'vue'
import App from './App.vue'

//引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

// 引入router
import router from "./router";


// 使用vant组件
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
