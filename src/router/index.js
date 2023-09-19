import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login';
import Main from '../views/Main';
import MemberList from '../views/members/MemberList';
import MemberLevel from '../views/members/MemberLevel';
import ErrorPage from "../views/ErrorPage";
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      //登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    //首页
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          //会员列表
          path: '/members/list',
          name:'MemberList',
          component: MemberList
        },
        {
          //会员等级
          path:'/members/level/:id',
          name:'MemberLevel',
          component:MemberLevel,
          props:true
        }
      ]
    },
    {
      path: '/goMain',
      redirect:'/main'
    },
    {
      path: '*',
      component: ErrorPage
    }
  ]
})
