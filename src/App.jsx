import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from "./components/Layout/Layout.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Property from "./pages/Property.jsx"
import NotFound from "./pages/NotFound.jsx"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App