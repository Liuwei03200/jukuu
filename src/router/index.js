import { createRouter, createWebHistory } from "vue-router";

 const routes = [
    {
         path:'/',
         component:()=>import('../layout/index.vue'),
         children:[{
             path:'',
             component:()=>import('../components/intro.vue')
         },{
             path:'advisor',
             component:()=>import('../components/advisor.vue')
         },{
            path:'helper_1',
            component:()=>import('../components/helper_1.vue')
        },{
            path:'helper_2',
            component:()=>import('../components/helper_2.vue')
        },{
            path:'helper_3',
            component:()=>import('../components/helper_3.vue')
        },{
            path:'helper_4',
            component:()=>import('../components/helper_4.vue')
        },{
            path:'contact',
            component:()=>import('../components/contact.vue')
        },{
            path:'declare',
            component:()=>import('../components/declare.vue')
        }
        ]
    }
 ]


const router = createRouter({
    history:createWebHistory('/about/'),
    routes
})

export default router;