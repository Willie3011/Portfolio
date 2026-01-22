import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProjectsPage from "./pages/ProjectPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/project/:id" element={<ProjectsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
