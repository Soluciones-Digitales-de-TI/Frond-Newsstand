import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";

export default function Registro() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errores, setErrores] = useState([])
    const {register} = useAuth({middleware: 'guest', url: '/'})

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
       register(datos, setErrores)
    }

    return (
        <>
            <div className="bg-white mt-10 px-5 py-10">
                <div className="mt-10">
                    <h1 className="text-4xl font-black text-center">Crea tu cuenta</h1>
                    <p className="text-center">Crea tu cuenta llenando el formulario</p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    noValidate
                >

                    { errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null }

                    <div className="mb-4">
                        <label
                            className="text-slate-800 font-semibold"
                            htmlFor="name"
                        >Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="name"
                            placeholder="Nombre"
                            ref={nameRef}
                        />
                    </div>

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
                            placeholder="Tu Contraseña"
                            ref={passwordRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-slate-800 font-semibold"
                            htmlFor="password_confirmation"
                        >Confirmar Contraseña:</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password_confirmation"
                            placeholder="Confirmar contraseña"
                            ref={passwordConfirmationRef}
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <input
                            type="submit"
                            value="Crear Cuenta"
                            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                        />
                    </div>
                </form>
            </div>

            <nav className="mt-1">
                <div className="flex justify-center items-center">
                    <label className="mr-2">¿Ya tienes cuenta?</label>
                    <Link to="/auth/login" className="text-indigo-600 hover:text-indigo-800 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                        Iniciar Sesión
                    </Link>
                </div>
            </nav>
        </>
    )
}
