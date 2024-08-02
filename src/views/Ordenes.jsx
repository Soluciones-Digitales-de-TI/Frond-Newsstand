import useSWR from "swr"
import useQuiosco from "../hooks/useQuiosco"
import clienteAxios from "../config/axios"
import { formatearDinero } from "../helpers"

export default function Ordenes() {
    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => clienteAxios('/api/v1/orders', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const {data, error, isLoading} = useSWR('/api/v1/orders', fetcher, {refreshInterval: 1000})

    const { handleClickCompletarPedido, handleClickCancelarPedido } = useQuiosco()

    if (isLoading) return 'Cargando...'
    if (error) return 'Hubo un error al cargar las órdenes'

    return (
        <div>
            <h1 className="text-4xl font-bold">Ordenes</h1>
            <p className="text-2xl my-10">
                Administra las ordenes desde aquí.
            </p>

            <div className="grid grid-cols-2 gap-5">
                {data?.data?.data?.models?.map(pedido => (
                    <div className="p-5 bg-white shadow space-y-2 border-b" key={pedido.id}>
                        <p className="text-xl font-bold text-slate-600">
                            Contenido del Pedido: 
                        </p>

                        {pedido?.products?.map(producto => (
                            <div 
                                className="border-b border-b-slate-200 last-of-type:border-none py-4"
                                key={producto.id}
                            >
                                <p className="text-sm">ID: {producto.id}</p>
                                <p>{producto.name}</p>
                                <p>
                                    Cantidad: {''}
                                    <span className="font-bold">{producto.pivot.cantidad}</span>
                                </p>
                            </div>
                        ))}

                        <p className="text-lg font-bold text-slate-600">
                            Cliente: {''}
                            <span className="font-normal">{pedido.user.name}</span>
                        </p>

                        <p className="text-lg font-bold text-amber-500">
                            Total a Pagar: {''}
                            <span className="font-normal text-slate-600">{ formatearDinero(pedido.total) }</span>
                        </p>

                        <button 
                            type="button" 
                            className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer'
                            onClick={() => handleClickCompletarPedido(pedido.id)}
                        >Completar</button>

                        <button 
                            type="button" 
                            className='bg-red-500 hover:bg-red-600 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer'
                            onClick={() => handleClickCancelarPedido(pedido.id)}
                        >Cancelar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
