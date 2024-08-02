import { createContext, useState, useEffect } from "react"
import { toast } from "react-toastify";
import clienteAxios from "../config/axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias ] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({})
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const nuevoTotal = pedido.reduce( (total, producto) => (producto.price * producto.cantidad) + total, 0 )
        setTotal(nuevoTotal)
    }, [pedido])

    const obtenerCategorias = async () => {
        try {
            const token = localStorage.getItem('AUTH_TOKEN')
            //const {data} = await clienteAxios('/api/v1/categories')
            const {data} = await clienteAxios('/api/v1/categories', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setCategorias(data.data.models)
            setCategoriaActual(data.data.models[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        if(pedido.some( pedidoState => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente')
        }else{
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido')
        }
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success('Eliminado del Pedido')
    }

    const handleSubmitNuevaOrden = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        const statusDefault = 1
        try {
            const response = await clienteAxios.post('/api/v1/orders', 
            {
                total,
                status: statusDefault
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // Obtener el ID de la orden recién creada
            const orderId = response.data.data.id

            // Enviar cada producto en una solicitud separada
            for (const producto of pedido) {
                const orderProduct = {
                    order_id: orderId,
                    product_id: producto.id,
                    cantidad: producto.cantidad
                };

                await clienteAxios.post('/api/v1/ordersproducts', 
                orderProduct, // Enviar objeto directamente
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }

            toast.success('Pedido realizado correctamene, estará listo en unos minutos')
            setTimeout(() => {
                setPedido([])
            }, 1000);

        } catch (error) {
            console.log(error)
        }
    }

    const handleClickCompletarPedido = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/v1/orders/${id}`, { status: 2 }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(id)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickCancelarPedido = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.delete(`/api/v1/orders/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(`Orden con id ${id} eliminada`)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickProductoAgotado = async id => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            await clienteAxios.put(`/api/v1/products/${id}`, { status: 2 }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(id)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
                handleSubmitNuevaOrden,
                handleClickCompletarPedido,
                handleClickCancelarPedido,
                handleClickProductoAgotado
            }}
        >{children}</QuioscoContext.Provider>
    )

}

export{
    QuioscoProvider
}
export default QuioscoContext