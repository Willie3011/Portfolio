import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProjectPage from "./pages/ProjectPage"
import MainLayout from "./layouts/MainLayout"

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Homepage/>
      },
      {
        path: "/project/:id",
        element: <ProjectPage/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
