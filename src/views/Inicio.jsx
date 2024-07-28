import { productos as data } from "../data/productos"
import Producto from "../components/Producto"
import Sidebar from "../components/Sidebar"
import useQuiosco from "../hooks/useQuiosco"

export default function Inicio() {

  const { categoriaActual } = useQuiosco()

  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
      <div className="flex">
        <div className="flex-1 p-4">
        <h1 className="text-4xl font-bold">{categoriaActual.nombre}</h1>
          <p className="text-2xl my-10">
          Elige y personaliza tu pedido a continuacón.
          </p>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {productos.map(producto => (
              <Producto 
                key={producto.imagen} 
                producto={producto} 
              />
            ))}
          </div>
        </div>
      </div>
    </>
    
  )
}
