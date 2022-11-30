import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Header from './components/Header'
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products/:id',
    element: <Products />,
  },
  {
    path: '/product/:id',
    element: <Product />,
  },
])

const App = () => {
  return (
    <>
      <Header />
      <main>
        <h1>welcome to shoppy</h1>
      </main>
      <Footer />
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
