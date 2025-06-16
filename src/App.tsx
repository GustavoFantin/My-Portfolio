import { BrowserRouter, Route, Routes } from "react-router-dom"
import Portfolio from "./pages/Portfolio"
import AboutMe from "./pages/AboutMe"
import Layout from "./pages/Layout"
import ContactMe from "./pages/ContactMe"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Portfolio />}/>
          <Route path="/about-me" element={<AboutMe />}/>
          <Route path="/contact-me" element={<ContactMe />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App