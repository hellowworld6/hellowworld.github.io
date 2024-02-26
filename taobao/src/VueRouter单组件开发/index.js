import{createRouter,createWebHistory} from 'vue-router'
import Films from './Films.vue'
// import Cinemas from './Cinemas.vue'
// import Center from './Center.vue'
import NotFound from './NotFound.vue'
// import Login from './Login.vue'
import Nowplaying from './nowplaying.vue'
// import Comingsoon from './comingsoon.vue'
import Details from './Details.vue'
import register from './register.vue'
const routes=[{
        path:"/films",
        // name:"aaaa" 命名路由
        component:Films,
       
        children:[{
            path:"/films/nowplaying",
            component:Nowplaying
        },
        {
            path:"/films/comingsoon",
            // 懒加载
            component:()=>import('./comingsoon.vue')
        }
    ]
   
    },
    {
        path:"/cinemas",
        component:()=>import('./Cinemas.vue')
    },
    {
        path:"/shop",
        component:()=>import('./Shop.vue')
    },
    {
        path:"/center",
        component: ()=>import('./Center.vue'),
        meta:{
            requiredAuth:true
        }
    },
    {
        name:"Login",
        path:"/login",
        component:()=>import('./Login.vue')
    },
    {
        // 重定向
        path:"/",
        redirect:"/films/nowplaying"
        // redirect:{
        //     nmae:"aaaa"
        // }
    },
    {
        path:'/:pathMatch(.*)*',
        component:NotFound
    },
    {
        
        path:"/Details",
        component:Details
    }
    ,
    {
        
        path:"/register",
        component:register
    }
]
const router = createRouter({
        history:createWebHistory(),
        routes:routes
})
// 全局拦截
router.beforeEach((to,from,next)=>{
    let isAuthenticated = localStorage.getItem("token")
    if(to.name !=='Login' && !isAuthenticated && to.meta.requiredAuth) next({name:'Login'})
    else next()
})
export default router