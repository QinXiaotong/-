import Vue from 'vue';
// 1. 导入vue-router
import VueRouter from 'vue-router';

// 导入组件
import HeroList from '../views/heroes/List.vue';
import weaponList from '../views/weapons/List.vue';
import equipList from '../views/equips/List.vue';

// 注册插件
Vue.use(VueRouter);

// 创建路由对象，配置路由规则

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {name: 'home', path: '/', redirect: '/heroes'},
        {name: 'heroes', path: '/heroes', component: HeroList},
        {name: 'weapons', path: '/weapons', component: weaponList},
        {name: 'equips', path: '/equips', component: equipList},
    ]
})

// 导出模块

export default router;
