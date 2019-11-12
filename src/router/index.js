import Vue from 'vue'
import Router from 'vue-router'
import change from "@/assets/js/Change the viewport.js"
import home from '@/view/pages/home/home'
import index from '@/view/pages/index/index'
import recommend from '@/view/pages/recommend/recommend'
import apply from '@/view/pages/apply/apply'
import contact from '@/view/pages/contact/contact'
import details from '@/components/details/details'
import teacher from '@/view/pages/teacher/teacher'
import school from '@/view/pages/school/school'
import nine from '@/view/pages/nine/nine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
      	//首页
      	{
      		path: '/index',
		      name: 'index',
		      component: index,
      	},
      	//课程推荐
      	{
      		path: '/recommend',
		      name: 'recommend',
		      component: recommend,
      	},
      	//在线报名
      	{
      		path: '/apply',
		      name: 'apply',
		      component: apply,
      	},
      	//联系我们
      	{
      		path: '/contact',
		      name: 'contact',
		      component: contact,
      	},
      	//师生
      	{
      		path: '/teacher',
		      name: 'teacher',
		      component: teacher,
      	},
      	//学校
      	{
      		path: '/school',
		      name: 'school',
		      component: school,
      	},
      	//九块九
      	{
      		path: '/nine',
		      name: 'nine',
		      component: nine,
      	},
      ],
    },
    {
			path: '/details',
		  name: 'details',
		  component: details,
		},
  ]
})
