import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import SinglePage from "./pages/SinglePage"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/single-page/:id" element={<SinglePage />} />
      <Route path="/create-page" element={<CreatePage />} />
      <Route path="/edit-page/:id" element={<EditPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
