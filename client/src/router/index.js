import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Settings from '@/components/Settings'
import Projects from '@/components/Projects'
import ProjectNew from '@/components/ProjectNew'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
		{
			path: '/register',
			name: 'Register',
			component: Register,
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
		},
		{
			path: '/profile',
			name: 'Profile',
			component: Profile,
		},
		{
			path: '/settings',
			name: 'Settings',
			component: Settings,
		},
		{
			path: '/projects',
			name: 'Projects',
			component: Projects,
		},
		{
			path: '/projects/new',
			name: 'New Project',
			component: ProjectNew,
		},
  ]
})
