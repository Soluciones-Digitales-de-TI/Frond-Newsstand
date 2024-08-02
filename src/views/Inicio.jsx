import useSWR from "swr"
import Producto from "../components/Producto"
import clienteAxios from "../config/axios"
import useQuiosco from "../hooks/useQuiosco"

export default function Inicio() {

  const { categoriaActual } = useQuiosco()

  const token = localStorage.getItem('AUTH_TOKEN')

  //Consulta SWR
  const fetcher = () => clienteAxios('/api/v1/products', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data)
  const { data, error, isLoading } = useSWR('/api/v1/products', fetcher, {
    refreshInterval: 1000
  })

  if(isLoading) return 'Cargando...'
  if(error) return 'Ha ocurrido un error al cargar los productos.'
  const productos = data.data.models.filter(producto => producto.categorie_id === categoriaActual.id)

  return (
    <>
      <div className="flex">
        <div className="flex-1 p-4">
          <h1 className="text-4xl font-bold">{categoriaActual.name}</h1>
          <p className="text-2xl my-10">
          Elige y personaliza tu pedido a continuación.
          </p>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {productos.map(producto => (
              <Producto 
                key={producto.image} 
                producto={producto} 
                botonAgregar={true}
              />
            ))}
          </div>
        </div>
      </div>
    </>
    
  )
}
