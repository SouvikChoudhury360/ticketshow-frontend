import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import UserLogin from '../components/UserLogin.vue'
import UserSignup from '../components/UserSignup.vue'
import AdminLogin from '../components/AdminLogin.vue'
import UserDashboard from '../components/UserDashboard.vue'
import MyBookings from '../components/MyBookings.vue'
import CreateBooking from '../components/CreateBooking.vue'
import ShowRating from '../components/ShowRating.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
import EditShow from '../components/EditShow.vue'
import EditVenue from '../components/EditVenue.vue'
import DeleteShow from '../components/DeleteShow.vue'
import DeleteVenue from '../components/DeleteVenue.vue'
import CreateVenue from '../components/CreateVenue.vue'
import CreateShow from '../components/CreateShow.vue'
import ShowAnalytics from '../components/ShowAnalytics'


const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/signup',
      name: 'UserSignup',
      component: UserSignup
    },
    {
      path: '/admin_login',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/dashboard/:userid',
      name: 'UserDashboard',
      component: UserDashboard
    },
    {
      path: '/mybookings/:userid',
      name: 'MyBookings',
      component: MyBookings
    },
    {
      path: '/book/:userid/:showid',
      name: 'CreateBooking',
      component: CreateBooking
    },
    {
      path: '/rating/:userid/:showid',
      name: 'ShowRating',
      component: ShowRating
    },
    {
      path: '/admindashboard',
      name: 'AdminDashboard',
      component: AdminDashboard
    },
    {
      path: '/editshow/:showid',
      name: 'EditShow',
      component: EditShow
    },
    {
      path: '/editvenue/:venueid',
      name: 'EditVenue',
      component: EditVenue
    },
    {
      path: '/deleteshow/:showid',
      name: 'DeleteShow',
      component: DeleteShow
    },
    {
      path: '/deletevenue/:venueid',
      name: 'DeleteVenue',
      component: DeleteVenue
    },
    {
      path: '/createvenue',
      name: 'CreateVenue',
      component: CreateVenue
    },
    {
      path: '/createshow/:venueid',
      name: 'CreateShow',
      component: CreateShow
    },
    {
      path: 'analytics/:showid',
      name: 'ShowAnalytics',
      component: ShowAnalytics
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(''),
    routes
  })
  
  export default router