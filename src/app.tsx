import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateRoom, Room } from './pages';

const router = createBrowserRouter([
  { path: '/',             element: <CreateRoom /> },
  { path: '/room/:roomId', element: <Room /> },
])

export const App = () => {
  return <RouterProvider router={router} />
};
