import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <main className=''>
      <div className="h-screen w-full flex justify-center items-center bg-gradient-to-tr from-slate-50 to-slate-50">
        <div className="bg-image w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-indigo-600">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-opacity-25 bg-indigo-600 backdrop">
            <img
              src='../img/logo.svg'
              alt='imagen logotipo'
              className='max-w-xs'
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
            <Outlet />
          </div>
        </div>
      </div>

    </main>
  )
}
