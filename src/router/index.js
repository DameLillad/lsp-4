import Vue from 'vue'
import VueRouter from "vue-router";
import Main from "../components/Main";
import Log from "../components/view/Log";
import Register from "../components/view/Register";
import Admin from "../components/view/admin/AdminIndex";
import Home from "../components/home/Home";
import Index from "../components/view/Index";
import UserIndex from "../components/view/UserIndex";
//安装路由
Vue.use(VueRouter);
// 配置导出路由
const routers = [
  //  路由路径
  {path: '/main', component: Main},
  {path: '/log', component: Log},
  {path: '/register/:pid', component: Register},
  //管理员页面上用户管理
  {
    path: '/admin', component: Admin, children: [
      {path: '/userManagement', name: 'UserM', component: () => import('../components/view/admin/UserManagement')}
    ]
  },
  {path: '/', name: 'Home', component: Home},
  //用户首页路由
  {path: "/userIndex", name: 'UserIndex', component: UserIndex},
  {path: '/index', component: Index},
  {path:"/adminIndex",component:Admin}
  // {path: 'HelloWorld',name:'HelloWorld',
  //   redirect:'/log'
  // }
  // {path: '*', component: Index}
]


export default new VueRouter({
  routes: routers,
  mode: 'history'
})

