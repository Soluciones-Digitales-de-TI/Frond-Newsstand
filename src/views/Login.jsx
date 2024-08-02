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
        /*try {
            const respuesta = await clienteAxios.post('/api/v1/login', datos)
            if (respuesta.data.success === false) {
                console.log('Errores de validación:', Object.values(respuesta.data.data));
                setErrores(Object.values(respuesta.data.data))  // Establecer los errores en el estado
            } else {
                //console.log(respuesta.data.data.access_token)
                localStorage.setItem('AUTH_TOKEN', respuesta.data.data.access_token);
                setErrores([])
            }
        } catch (error) {
            console.log(error)
        }*/
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

            {/* <div className="mb-4 flex">
              <div className="inline-flex items-center w-full">
                <label
                  className="relative flex cursor-pointer items-center rounded-full"
                  htmlFor="checkbox-6"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-indigo-500 hover:before:opacity-10"
                    id="checkbox-6"
                  />
                  <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </label>
                <span className="ml-2">
                  Recuerdame
                </span>
              </div>
              <div className="w-full text-right flex justify-center items-center">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </div> */}

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
