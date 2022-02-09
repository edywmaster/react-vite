import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Contato } from './pages/Contato'
import { Home } from './pages/Home'

export function AppRoutes () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  )
}
