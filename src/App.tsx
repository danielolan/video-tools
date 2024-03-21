import { Outlet, Route, Routes } from "react-router-dom"
import VideoPage from "./pages/VideoPage"
import VideoDeatail from "./pages/VideoDeatail"



function App() {
 
  return (
    <Routes>
    <Route path="/" >
      <Route index element={<VideoPage />} />
      <Route path="detailvideo/:id" element={<VideoDeatail />} />
      <Route path="*" element={<VideoPage />} />
    </Route>
  </Routes>
  )
}

export default App
