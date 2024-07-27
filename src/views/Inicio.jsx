import { productos } from "../data/productos"
import Producto from "../components/Producto"
import Sidebar from "../components/Sidebar"

export default function Inicio() {

  // console.log(productos)

  return (
    <div className="flex">

      <div className="flex-1 p-4">
      <h1 className="text-4xl from-black">Inicio</h1>
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
  )
}
