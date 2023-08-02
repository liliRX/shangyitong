import { createRouter, createWebHistory} from 'vue-router'

export default createRouter({
    //路由模式
    history: createWebHistory(),
    //路由管理
    routes: [
        //两个一级页面
        {
            path: '/home',
            // 懒加载
            component: () => import('@/components/home/index.vue')
        },
        {
            path: '/detail',
            component: () => import('@/components/detail/index.vue')
        },
        //重定向
        {
            path: '/',
            redirect: '/home'
        }
    ],
    //滚动行为
    scrollBehavior(){
        return{
            top:0,
            left:0
        }
    }
})