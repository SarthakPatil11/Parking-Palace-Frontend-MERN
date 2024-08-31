import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Index from './pages/IndexPage/Index'
import SignUpMain from './pages/SignUpPage/SignUpMain'
import CardListMain from './pages/UserPages/CardListPage/CardListMain'
import DashBoard from './pages/AdminPages/DashBoard/DashBoard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Index />
      },
      {
        path: "SignUpMain",
        element: <SignUpMain />
      },
      {
        path: "CardListMain",
        element: <CardListMain />
      },
      {
        path: "DashBoard",
        element: <DashBoard />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
