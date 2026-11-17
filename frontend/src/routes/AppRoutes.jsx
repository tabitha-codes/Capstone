import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ApartmentsPage from '../pages/ApartmentsPage'
import PageNotFound from '../pages/PageNotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apartments" element={<ApartmentsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
