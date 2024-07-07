import { Suspense, lazy } from 'react';
import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';

import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';
import AuthLayout from 'layouts/auth-layout';
import { rootPaths } from './paths';
import paths from './paths';
import Login from 'pages/authentication/Login';
import SignUp from 'pages/authentication/SignUp';

const App = lazy(() => import('App'));

const MainLayout = lazy(() => import('layouts/main-layout'));

const ErrorPage = lazy(() => import('pages/error/ErrorPage'));
const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));

const routes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.home,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            // path: paths.home,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children: [
          {
            path: paths.login,
            element: <Login />,
          },
          {
            path: paths.signup,
            element: <SignUp />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

const options: { basename: string } = {
  basename: '/nickelfox-sales-management',
};

const router = createBrowserRouter(routes, options);

export default router;
