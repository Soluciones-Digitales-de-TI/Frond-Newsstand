import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";


export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();

    const [errores, setErrores] = useState([])
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    })

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        
        login(datos, setErrores)
    }

    return (
      <>
        <div className="bg-white px-5">

          <div className="mb-7">
            <h1 className="text-4xl font-black text-center">Iniciar Sesión</h1>
            <p className="text-lg text-center"><span className="font-semibold">¡Bienvenido de vuelta!</span> Por favor ingresa tu cuenta.</p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate
          >

              { errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null }

            <div className="mb-4">
              <label
                className="text-slate-800 font-semibold"
                htmlFor="email"
              >Email:</label>
              <input
                type="email"
                id="email"
                className="mt-2 w-full p-3 bg-gray-50"
                name="email"
                placeholder="Email"
                ref={emailRef}
              />
            </div>

            <div className="mb-4">
              <label
                className="text-slate-800 font-semibold"
                htmlFor="password"
              >Contraseña:</label>
              <input
                type="password"
                id="password"
                className="mt-2 w-full p-3 bg-gray-50"
                name="password"
                placeholder="Contraseña"
                ref={passwordRef}
              />
            </div>

            <div className="flex justify-center items-center">
              <input
                type="submit"
                value="Iniciar Sesión"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              />
            </div>

            <nav className="mt-7">
              <div className="flex justify-center items-center">
                  <label className="mr-2" >¿Eres nuevo?</label>
                  <Link to="/auth/registro" className=" text-indigo-600 hover:text-indigo-800 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                    Crea una cuenta
                  </Link>
              </div>
            </nav>

          </form>
        </div>
      </>
    )
}
