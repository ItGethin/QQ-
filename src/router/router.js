import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Recom from '../components/Recom.vue'
import TopList from '../components/TopList.vue'
import Search from '../components/Search.vue'



export default new VueRouter({
    routes:[
        {path:'/recom', component: Recom},
        {path:'/toplist', component: TopList},
        {path:'/search', component: Search}
    ]
})

