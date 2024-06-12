import App from 'App';
import MainLayout from 'layouts/main-layout';
import Dashboard from 'pages/dashboard/Dashboard';
import { Suspense } from 'react';
import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: '',
        element: (
          <MainLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            path: '',
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
