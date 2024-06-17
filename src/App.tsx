import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './pages/MainLayout/MainLayout';
import MessageDetails from './pages/MessageDetails/MessageDetails';
import MobileHome from './pages/MobileHome/MobileHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MobileHome />,
      },
      {
        path: '/message/:id',
        element: <MessageDetails />,
      },
    ],
  },
]);
function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
