import Home from '@/pages/home/home'
import User from '@/pages/user/user'
import NotFound from '@/pages/errors/404/NotFound'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '*',
    noLayout: true,
    component: NotFound
  }
]

export default routes
