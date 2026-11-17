import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ApartmentsPage from '../pages/ApartmentsPage'
import ApartmentDetailsPage from '../pages/ApartmentDetailsPage'
import PageNotFound from '../pages/PageNotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apartments" element={<ApartmentsPage />} />
      <Route path="/apartments/:id" element={<ApartmentDetailsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes
