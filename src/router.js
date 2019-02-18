import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Logout from '@/components/auth/Logout.vue';
import TeamConfirmation from '@/components/Team/TeamConfirmation.vue';
import Portfolio from './views/Portfolio.vue';
import Termsandconditions from './views/Termsandconditions.vue'
import Media from './views/Media.vue'
import Team from './views/Team.vue'
import Privacypolicy from './views/PrivacyPolicy.vue'
import Dota2Search from './views/Dota2Search.vue'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import Stats from '@/views/Stats.vue'
import Streams from '@/views/Streams.vue'
import Sponsors from '@/views/Sponsors.vue'
import SponsorsForm from '@/views/SponsorsForm.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sponsors/form',
      name: 'SponsorsForm',
      component: SponsorsForm
    },
      {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    },
    {
      path: '/streams',
      name: 'Streams',
      component: Streams
    },
    {
      path: '/dota2/stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/dota2search',
      name: '/dota2search',
      component: Dota2Search,
      meta: {
        requiresAuth: true,
      }
    }, 
    {
      path: '/media',
      name: 'media',
      component: Media
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/termsandconditions',
      name: 'termsandconditions',
      component: Termsandconditions
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: Privacypolicy
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/team/:teamId',
      name: 'team',
      component: Team,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/teamconfirmation/:token',
      name: 'team-confirmation',
      component: TeamConfirmation,
      // meta: {
      //   requiresAuth: true,
      // }
    }
  ]
})
