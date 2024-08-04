import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function Producto({producto, botonAgregar = false, botonDisponible = false, botonEliminar = false}) {

  const { handleClickModal, handleSetProducto, handleClickEliminarProducto } = useQuiosco();
  const { image, name, price } = producto;

  const imageUrl = `/img/${image}.jpg`;

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={imageUrl}
        alt={`imagen ${name}`}
        className="w-full h-40 object-cover rounded-md"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-2 font-black text-.5xl text-amber-500">{formatearDinero(price)}</p>
      </div>
      
      {botonAgregar && (
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-3 p-3 uppercase font-bold cursor-pointer rounded transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
          onClick={() => {
            handleClickModal();
            handleSetProducto(producto);
          }}
        >
          Agregar
        </button>
      )}

      {botonDisponible && (
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-3 p-3 uppercase font-bold cursor-pointer rounded transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
          onClick={() => {
            handleClickModal();
            handleSetProducto(producto);
          }}
        >
          Modificar Producto
      </button>
      )}

      {botonEliminar && (
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white w-full mt-3 p-3 uppercase font-bold cursor-pointer rounded transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
          onClick={() => handleClickEliminarProducto(producto.id)}
        >
          Eliminar Producto
      </button>
      )}

    </div>
  );
}
