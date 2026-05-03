import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Mapping from '../pages/Mapping'
import Roadmap from '../pages/Roadmap'
import Framework from '../pages/Framework'
import Manifesto from '../pages/Manifesto'
import Essays from '../pages/Essays'
import Contact from '../pages/Contact'
import Evolution from '../pages/Evolution'
import Friction from '../pages/Friction'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/mapping', element: <Mapping /> },
  { path: '/roadmap', element: <Roadmap /> },
  { path: '/framework', element: <Framework /> },
  { path: '/manifesto', element: <Manifesto /> },
  { path: '/essays', element: <Essays /> },
  { path: '/contact', element: <Contact /> },
  { path: '/essays/evolution', element: <Evolution /> },
  { path: '/friction', element: <Friction /> }
])