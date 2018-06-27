import Vue from 'vue'
import Router from 'vue-router'
import HomeCreate from '@/components/HomeCreate'
import Armies from '@/components/Armies'
import Units from '@/components/Units'
import UnitCreation from '@/components/UnitCreation'
import ListOfLaravelUsers from '@/components/ListOfLaravelUsers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/armies-creation',
      name: 'HomeCreate',
      component: HomeCreate
    },
    {
      path: '/armies',
      name: 'Armies',
      component: Armies
    },
    {
      path: '/units',
      name: 'Units',
      component: Units
    },
    {
      path: '/UnitCreation',
      name: 'UnitCreation',
      component: UnitCreation
    },
    {
      path: '/list',
      name: 'ListOfLaravelUsers',
      component: ListOfLaravelUsers
    }
  ]
})
