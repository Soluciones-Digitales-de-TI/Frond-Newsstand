import { useState } from "react";
import useQuiosco from "../hooks/useQuiosco"
import { useAuth } from "../hooks/useAuth";

export default function ModalAdminProducto() {

    const [errores, setErrores] = useState([])
    const { updateProduct } = useAuth({
        middleware: 'admin',
        url: '/'
    })

    const { producto, handleClickModal } = useQuiosco();

    const [name, setName] = useState(producto.name);
    const [price, setPrice] = useState(producto.price);


    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: name,
            price: price,
            image: producto.image,
            available: producto.available,
            categorie_id: producto.categorie_id
        }
        
        updateProduct(datos, producto.id, setErrores)
        handleClickModal()
    }

    return (
        <form 
            onSubmit={handleSubmit}
        >
            <div className="md:flex gap-10">
                <div className="md:w-1/3">
                    <img 
                        alt={`Imagen producto ${producto.name}`} 
                        src={`/img/${producto.image}.jpg`}
                    />
                </div>

                <div className="md:w-2/3">
                    <div className="flex justify-end">
                        <button onClick={handleClickModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>

                
                    <div className="">
                        <label
                            className="text-slate-800 font-semibold"
                        >Código N°:</label>

                        <input className="text-2xl p-3 font-bold mt-2"
                            type="text"
                            value={producto.id}
                            readOnly
                        />
                    </div>

                    <div className="">
                        <label
                            className="text-slate-800 font-semibold"
                            htmlFor="name"
                        >Nombre:</label>
                        
                        <input className="text-2xl p-3 font-bold mt-2"
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="">
                        <label
                            className="text-slate-800 font-semibold"
                            htmlFor="price"
                        >Precio:</label>

                        <label
                            className="mt-2 p-3 font-black text-3xl text-amber-500"
                        >$</label>

                        <input className="mt-2  font-black text-3xl text-amber-500"
                            type="text"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    

                    <input
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                        value="Actualizar Datos"
                    />

                </div>
            </div>
        </form>
    )
}
