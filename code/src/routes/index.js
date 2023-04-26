import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('@/views/Casa.vue');
const About = () => import('@/views/Outro.vue');

const routes = [
  { path: '/', name: 'home',  component: Home },
  { path: '/about', name: 'about', component: About },
]

const router = createRouter({
	routes,
 	history: createWebHistory(),
})

export default router;