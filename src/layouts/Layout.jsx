import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'

export default function Layout() {
  return (
    <div className='md:flex'>
        <Sidebar />

        <div className="md:flex-1 h-screen overflow-y-scroll p-3">
          <div className="bg-gray-200">
            <Resumen />
          </div>
          <div className="bg-gray-100">
            <Outlet />
          </div>
          
          
        </div>

        {/* <main className='flex-1 h-screen overflow-y-scroll bg-gray-50 p-3'>
          <Outlet />
        </main>

        <Resumen /> */}
    </div>
  )
}
