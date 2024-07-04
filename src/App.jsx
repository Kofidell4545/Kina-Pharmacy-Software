import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout'
import Home from './pages/home'
import Error from './pages/Error'
import About from './pages/about'
import Contact from './pages/contact'
import Education from './pages/education'
import OurPharmacy from './pages/ourPharmacy'

const router = createBrowserRouter([
  {element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/our-pharmacy',
        element: <OurPharmacy />,
      },
      {
        path: '/education',
        element: <Education />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
