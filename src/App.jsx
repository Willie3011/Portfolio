import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProjectPage from "./pages/ProjectPage"
import MainLayout from "./layouts/MainLayout"
import ProjectsPage from "./pages/ProjectsPage"

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
      },
      {
        path: "projects",
        element: <ProjectsPage/>
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
