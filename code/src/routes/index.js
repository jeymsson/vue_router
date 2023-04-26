import {createRouter, createWebHistory} from 'vue-router'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', name: 'home',  component: Home },
  { path: '/about', name: 'about', component: About },
]

const router = createRouter({
	routes,
 	history: createWebHistory(),
})

export default router;