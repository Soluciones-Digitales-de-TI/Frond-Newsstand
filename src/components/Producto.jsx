
export default function Producto({producto}) {
  const { imagen, nombre, precio } = producto;

  console.log(producto)
  const imageUrl = `/img/${imagen}.jpg`;

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={imageUrl}
        alt={nombre}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{nombre}</h2>
      <p className="text-lg text-gray-600 mt-1">${precio.toFixed(2)}</p>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
      >
        Agregar

      </button>
    </div>
  );
}
