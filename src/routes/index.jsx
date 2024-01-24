import MainLayout from '@layouts/MainLayout';
import TransparentNavbarLayout from '@layouts/TransparentNavbarLayout';

import Home from '@pages/Home';
import RegisterPage from '@pages/RegisterPage';
import LoginPage from '@pages/LoginPage';
import NotFound from '@pages/NotFound';

const routes = [
  {
    path: '/',
    name: 'Register Page',
    protected: false,
    component: Home,
    layout: TransparentNavbarLayout,
  },
  {
    path: '/register',
    name: 'Register Page',
    protected: false,
    component: RegisterPage,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login Page',
    protected: false,
    component: LoginPage,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
