import { createRouter, createWebHistory } from 'vue-router'
import PassengerView from '../views/PassengerView.vue'
import PassengerDetailView from '@/views/PassengerDetailView.vue'
import PassengerLayout from '@/views/event/PassengerLayoutView.vue'
import PassengerAirlineView from '@/views/event/PassengerAirlineView.vue'
import PassengerOtherView from '@/views/event/PassengerOtherView.vue'
import PassengerEditView from '@/views/event/PassengerEditView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NotHaveBrows from '@/views/NotHaveBrows.vue'
import NProgress from 'nprogress'
import PassengerService from '@/services/PassengerService'
import { useEventStore } from '@/stores/event'
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
      beforeEnter: (to) => {
        //add api
        const id: number = parseInt(to.params.id as string)
        const eventStore = useEventStore()
        return PassengerService.getEventById(id)
          .then((response) => {
            //set up data for the component
            eventStore.setEvent(response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource',
                params: { resource: 'event' }
              }
            } else {
              return {
                name: 'network-error'
              }
            }
          })
      },

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
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
