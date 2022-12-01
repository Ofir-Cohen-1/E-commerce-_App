// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import { Container } from 'react-bootstrap'
// import Home from './pages/Home/Home'
// import Products from './pages/Products/Products'
// import Product from './pages/Product/Product'
import Header from './components/Header'
import Footer from './components/Footer'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/products/:id',
//     element: <Products />,
//   },
//   {
//     path: '/product/:id',
//     element: <Product />,
//   },
// ])

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>welcome to shoppy</h1>
        </Container>
      </main>
      <Footer />
      {/* <div className='App'>
        <RouterProvider router={router} />
      </div> */}
    </>
  )
}

export default App
