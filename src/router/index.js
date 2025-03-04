import { createRouter, createWebHistory } from 'vue-router';
import VideoPage from '../components/VideoPage.vue'; // import second page
import App from '../App.vue'; // import first page

const routes = [
  { path: '/', component: App },          // first page path
  { path: '/videos', component: VideoPage }, // second page path
];

const router = createRouter({
  history: createWebHistory(), // use HTML5 history API 
  routes,
});

export default router;