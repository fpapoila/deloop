import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import Project from '@/components/Project';
import ProjectNew from '@/components/ProjectNew';

Vue.use(Router);

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
			path: '/profile/:id',
			name: 'Profile',
			component: Profile,
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
		{
			path: '/projects/:id',
			name: 'Project',
			component: Project,
		},
	],
});
