import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({categoria}) {

    const {handleClickCategoria, categoriaActual} = useQuiosco();
    const {icon, id, name} = categoria

    const resaltarCategoriaActual = () => categoriaActual.id == id ? 'bg-amber-400' : 'bg-white'

  return (
    <div className={`${resaltarCategoriaActual()} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>

        <img 
            className="w-12"
            src={`/img/icono_${icon}.svg`} 
            alt="Imagen icono" 
        />

        <button 
          className="text-lg font-bold cursor-pointer truncate"
          type="button"
          onClick={() => handleClickCategoria(id)}
        >
          {name}
        </button>

    </div>
  )
}
