import React, { useState } from 'react';

export default function Resumen() {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="grid grid-cols-2 p-3">
          <div className="col-8 col-md-3">
            <img className="w-10" src="/img/empresa.png" alt="imagen logo" />
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  );
}

function NavBar() {
  const [isCarritoVisible, setCarritoVisible] = useState(false);

  return (
    <nav>
      <div
        className="carrito relative flex"
        onMouseEnter={() => setCarritoVisible(true)}
        onMouseLeave={() => setCarritoVisible(false)}
      >
        <p className='font-bold'>Mi cesta</p>
        <img className="w-10" src="/img/carrito.png" alt="imagen carrito" />

        <div id="carrito" className={`absolute bg-white p-3 shadow-lg ${isCarritoVisible ? 'block z-50' : 'hidden'}`} style={{ top: '115%', left: '0' }}>
          <p className="text-center">El carrito está vacío</p>
          <table className="w-10 table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>SubTotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img className="img-fluid w-8" src="/img/guitarra_02.jpg" alt="imagen guitarra" />
                </td>
                <td>SRV</td>
                <td className="font-bold">$299</td>
                <td className="flex align-items-start gap-4">
                  <button type="button" className="btn btn-dark p-1">-</button> 1
                  <button type="button" className="btn btn-dark p-1">+</button>
                </td>
                <td className="font-bold">$299</td>
                <td>
                  <button className="btn btn-danger text-xs rounded-full p-1" type="button">X</button>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-end">Total a pagar: <span className="font-bold">$899</span></p>
          <button className="btn btn-dark w-full mt-3 p-2">Vaciar Carrito</button>
        </div>
      </div>
    </nav>
  );
}
