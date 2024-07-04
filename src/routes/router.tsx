import { Suspense, lazy } from 'react';
import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';

import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';
import AuthLayout from 'layouts/auth-layout';

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
        path: '',
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: '/',
            element: <Dashboard />,
          },
        ],
      },
      {
        path: 'authentication',
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children: [
          {
            path: 'login',
            element: <></>,
          },
          {
            path: 'register',
            element: <></>,
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
