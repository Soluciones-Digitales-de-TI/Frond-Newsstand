import useSWR from "swr"
import clienteAxios from "../config/axios"
import Producto from "../components/Producto"

export default function Productos() {

    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => clienteAxios('/api/v1/products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(datos => datos.data)

    const { data, error, isLoading } = useSWR('/api/v1/products', fetcher, {refreshInterval: 10000})

    if (isLoading) return 'Cargando...'
    if (error) return 'Hubo un error al cargar las órdenes'

    return (
      <div>
            <h1 className="text-4xl font-bold">Productos</h1>
            <p className="text-2xl my-10">
                Maneja la disponibilidad desde aquí.
            </p>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {data.data.models.map(producto => (
                <Producto 
                  key={producto.image} 
                  producto={producto} 
                  botonDisponible={true}
                />
              ))}
          </div>
      </div>
    )
}
