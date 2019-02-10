import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Employee from '../views/Employee.vue'
import Actions from '../views/Actions.vue'
import Reports from '../views/Reports.vue'
import Directories from '../views/directories/Directories.vue'
import EmployeeDetails from '../views/EmployeeDetails.vue'
import ImportUsers from '../views/ImportUsers.vue'
import ResetPasswordEmail from '../views/ResetPasswordEmail'
import ResetPasswordConfirm from '../views/ResetPasswordConfirm'
import Organizations from '../views/directories/Organizations'
import Units from '../views/directories/Units'
import Positions from '../views/directories/Positions'
import Categories from '../views/directories/Categories'
import Countries from '../views/directories/Countries'
import Regions from '../views/directories/Regions'
import Cities from '../views/directories/Cities'
import Competencies from '../views/directories/Competencies'
import Courses from '../views/directories/Courses'
import Payments from '../views/directories/Payments'
import ExportUsers from '../views/ExportUsers'
import Addresses from '../views/directories/Addresses'
import EditAddress from '../views/directories/EditAddress'
import AddAddress from '../views/directories/AddAddress'
import AddCity from '../views/directories/AddCity'
import EditCity from '../views/directories/EditCity'
import AddRegion from '../views/directories/AddRegion'
import EditRegion from '../views/directories/EditRegion'
import AddCountry from '../views/directories/AddCountry'
import EditCountry from '../views/directories/EditCountry'
import AddCategory from '../views/directories/AddCategory'
import EditCategory from '../views/directories/EditCategory'
import AddCompetency from '../views/directories/AddCompetency'
import EditCompetency from '../views/directories/EditCompetency'
import AddCourse from '../views/directories/AddCourse'
import EditCourse from '../views/directories/EditCourse'
import AddOrganization from '../views/directories/AddOrganization'
import EditOrganization from '../views/directories/EditOrganization'
import AddPayment from '../views/directories/AddPayment'
import EditPayment from '../views/directories/EditPayment'
import AddPosition from '../views/directories/AddPosition'
import EditPosition from '../views/directories/EditPosition'
import Disciple from '../views/Disciple'
import DiscipleDetails from '../views/DiscipleDetails'
import User from '../views/directories/User'
import UserDetails from '../views/directories/UserDetails'
import AddUnit from '../views/directories/AddUnit'
import EditUnit from '../views/directories/EditUnit'
import Faculties from '../views/directories/Faculties'
import AddFaculty from '../views/directories/AddFaculty'
import EditFaculty from '../views/directories/EditFaculty'
import ResourceList from '../views/ResourceList'
import ResourceAdd from '../views/ResourceAdd'
import ResourceEdit from '../views/ResourceEdit'
import ResourceDetail from '../views/ResourceDetail'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: '/sirius',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/login/reset',
      name: 'resetPassword',
      component: ResetPasswordEmail
    },
    {
      path: '/login/:uidb64/:token/reset',
      name: 'resetPasswordConfirm',
      component: ResetPasswordConfirm
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:resource/list',
      name: 'list',
      component: ResourceList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:resource/add',
      name: 'addfirst',
      component: ResourceAdd,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:resource/add/:id',
      name: 'add',
      component: ResourceAdd,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:resource/edit/:id',
      name: 'edit',
      component: ResourceEdit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:resource/detail/:id',
      name: 'edit',
      component: ResourceDetail,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/employee',
      name: 'employee',
      component: Employee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/employee/:id/details',
      name: 'employeeDetails',
      component: EmployeeDetails,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/disciple',
      name: 'disciple',
      component: Disciple,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/disciple/:id/details',
      name: 'discipleDetails',
      component: DiscipleDetails,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/users',
      name: 'user',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/users/:id/details',
      name: 'userDetails',
      component: UserDetails,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/actions',
      name: 'actions',
      component: Actions,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/actions/import/users',
      name: 'importUsers',
      component: ImportUsers,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/actions/export/users',
      name: 'exportUsers',
      component: ExportUsers,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories',
      name: 'directories',
      component: Directories,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/organizations',
      name: 'organizations',
      component: Organizations,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/organizations/add',
      name: 'addOrganization',
      component: AddOrganization,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/organizations/edit/:id',
      name: 'editOrganization',
      component: EditOrganization,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/units',
      name: 'units',
      component: Units,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/units/add/:id',
      name: 'addUnit',
      component: AddUnit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/units/edit/:id',
      name: 'editUnit',
      component: EditUnit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/faculties',
      name: 'faculties',
      component: Faculties,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/faculties/add/:id',
      name: 'addFaculty',
      component: AddFaculty,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/faculties/edit/:id',
      name: 'editFaculty',
      component: EditFaculty,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/positions',
      name: 'positions',
      component: Positions,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/positions/add',
      name: 'addPosition',
      component: AddPosition,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/positions/edit/:id',
      name: 'editPosition',
      component: EditPosition,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/categories',
      name: 'categories',
      component: Categories,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/categories/add',
      name: 'addCategory',
      component: AddCategory,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/categories/edit/:id',
      name: 'editCategory',
      component: EditCategory,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/competencies',
      name: 'competencies',
      component: Competencies,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/competencies/add',
      name: 'addCompetency',
      component: AddCompetency,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/competencies/edit/:id',
      name: 'editCompetency',
      component: EditCompetency,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/countries',
      name: 'countries',
      component: Countries,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/countries/add',
      name: 'addCountry',
      component: AddCountry,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/countries/edit/:id',
      name: 'editCountry',
      component: EditCountry,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/regions',
      name: 'regions',
      component: Regions,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/regions/add',
      name: 'addRegion',
      component: AddRegion,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/regions/edit/:id',
      name: 'editRegion',
      component: EditRegion,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/cities',
      name: 'cities',
      component: Cities,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/cities/add',
      name: 'addCity',
      component: AddCity,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/cities/edit/:id',
      name: 'editCity',
      component: EditCity,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/addresses',
      name: 'addresses',
      component: Addresses,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/addresses/add',
      name: 'addAddress',
      component: AddAddress,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/addresses/edit/:id',
      name: 'editAddress',
      component: EditAddress,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/courses',
      name: 'courses',
      component: Courses,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/courses/add',
      name: 'addCourse',
      component: AddCourse,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/courses/edit/:id',
      name: 'editCourse',
      component: EditCourse,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/payments',
      name: 'payments',
      component: Payments,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/payments/add',
      name: 'addPayment',
      component: AddPayment,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/directories/payments/edit/:id',
      name: 'editPayment',
      component: EditPayment,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
