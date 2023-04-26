import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('@/views/Casa.vue');
const About = () => import('@/views/Outro.vue');
const Crud = () => import('@/views/Crud.vue');
const Relatorio = () => import('@/views/Relatorio.vue');

const routes = [
  { path: '/', name: 'home',  component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/crud', name: 'crud', component: Crud },
  { path: '/relatorio', name: 'relatorio', component: Relatorio },
]

const router = createRouter({
	routes,
 	history: createWebHistory(),
})

export default router;