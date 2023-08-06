import { createRouter, createWebHistory } from 'vue-router'
import PassengerView from '../views/PassengerView.vue'
import PassengerDetailView from '@/views/PassengerDetailView.vue'
import PassengerLayout from '@/views/event/PassengerLayoutView.vue'
import PassengerAirlineView from '@/views/event/PassengerAirlineView.vue'
import PassengerOtherView from '@/views/event/PassengerOtherView.vue'
import PassengerEditView from '@/views/event/PassengerEditView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NotHaveBrows from '@/views/NotHaveBrows.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger',
      component: PassengerView
    },
    {
      path: '/passenger/:id',
      name: 'passenger-layout',
      component: PassengerLayout,
      props: true,
      children: [
        {
          path: '',
          name: 'passenger-detail',
          component: PassengerDetailView,
          props: true
        },
        {
          path: 'airline',
          name: 'passenger-airline',
          component: PassengerAirlineView,
          props: true
        },
        {
          path: 'other',
          name: 'event-other',
          component: PassengerOtherView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: PassengerEditView,
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotHaveBrows
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    }
  ]
})

export default router
