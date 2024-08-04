import { useEffect } from "react"
import useSWR from "swr"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../config/axios"

export const useAuth = ({middleware, url}) => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate();

    const { data: user, error, mutate } = useSWR('/api/user', () => 
        clienteAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(respuesta?.data?.data)
        })
    )

    const login = async (datos, setErrores) => {
        try {
            const respuesta = await clienteAxios.post('/api/v1/login', datos)
            if (respuesta.data.success === false) {
                console.log('Errores de validación:', Object.values(respuesta.data.data));
                setErrores(Object.values(respuesta.data.data))  // Establecer los errores en el estado
            } else {
                localStorage.setItem('AUTH_TOKEN', respuesta.data.data.access_token);
                setErrores([])
                await mutate()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const register = async (datos, setErrores) => {
        try {
            const respuesta = await clienteAxios.post('/api/v1/register', datos)
            if (respuesta.data.success === false) {
                console.log('Errores de validación:', Object.values(respuesta.data.data));
                setErrores(Object.values(respuesta.data.data))  // Establecer los errores en el estado
            } else {
                localStorage.setItem('AUTH_TOKEN', respuesta.data.data.access_token);
                setErrores([])
                await mutate()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        try {
            await clienteAxios.post('/api/v1/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch (error) {
            throw Error(respuesta?.data?.data)
        }
    }

    const updateProduct = async (datos, id, setErrores) => {
        try {
            await clienteAxios.put(`/api/v1/products/${id}`, datos, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        if(middleware === 'guest' && url && user) {
            navigate(url)
        }

        if(middleware === 'guest' && user && user.admin) {
            navigate('/admin')
        }
        
        if(middleware === 'admin' && user && !user.admin) {
            navigate('/')
        }

        if(middleware === 'auth' && error) {
            navigate('/auth/login')
        }
    }, [user, error])

    return {
        login,
        register,
        logout,
        user,
        error,
        updateProduct
    }

}