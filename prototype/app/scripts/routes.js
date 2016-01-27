import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import LoginFail from './pages/loginFail.jsx';
import LoginForgotten from './pages/loginForgotten.jsx';
import LoginForgottenCode from './pages/loginForgottenCode.jsx';
import LoginForgottenNew from './pages/loginForgottenNew.jsx';
import Inbox from './pages/inbox.jsx';


const routes = {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/loginfail',
      component: LoginFail
    },
    {
      path: '/loginforgotten',
      component: LoginForgotten
    },
    {
      path: '/loginforgottencode',
      component: LoginForgottenCode
    },
    {
      path: '/loginforgottennew',
      component: LoginForgottenNew
    },
    {
      path: '/inbox',
      component: Inbox
    }
  ]
}

export { routes };
