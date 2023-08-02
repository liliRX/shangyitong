// Vue3,创建vue实例
import { createApp } from 'vue'
// 引入 reset.scss
import '@/assets/style/reset.scss'
// 引入 vue-router
import router from './router/router'
// 引入 pinia
// import store from './store'
// 引入根组件
import App from './App.vue'
import HospitalTop from '@/views/HospitalTop.vue'
import HospitalBottom from '@/views/HospitalBottom.vue'
// 创建应用实例
const app = createApp(App)
//全局组件
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom);
//挂载路由
app.use(router)
//挂载
app.mount('#app')
