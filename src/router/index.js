import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login';
import Main from '../views/Main';
import MemberList from '../views/members/MemberList';
import MemberLevel from '../views/members/MemberLevel';
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    {
      //登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          //会员等级
          path:'/members/level',
          name:'MemberLevel',
          component:MemberLevel
        },
        {
          //会员列表
          path: '/members/list',
          name:'MemberList',
          component: MemberList
        }
      ]
    }
  ]
})
