import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function Producto({producto}) {

  const { handleClickModal } = useQuiosco();
  const { imagen, nombre, precio } = producto;

  const imageUrl = `/img/${imagen}.jpg`;

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={imageUrl}
        alt={`imagen ${nombre}`}
        className="w-full h-40 object-cover rounded-md"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{nombre}</h3>
        <p className="mt-2 font-black text-.5xl text-amber-500">{formatearDinero(precio)}</p>
      </div>
      
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-3 p-3 uppercase font-bold cursor-pointer rounded transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
        onClick={() => {
          handleClickModal();
        }}
      >
        Agregar
      </button>

    </div>
  );
}
