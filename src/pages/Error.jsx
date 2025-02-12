import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <section className="flex items-center justify-center my-8">
      <div className="text-center">
        {/* Código de Error */}
        <h1 className="text-6xl font-bold text-[#951a11] mb-4">404</h1>

        {/* Mensaje de Error */}
        <p className="text-xl text-gray-700 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Barra de Búsqueda */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="px-4 py-2 border border-gray-300 rounded w-64 focus:outline-none focus:border-[#951a11]"
          />
        </div>

        {/* Botones de Navegación */}
        <div className="flex justify-center space-x-4 mb-8">
          <Link to="/">
            <span className="px-6 py-2 bg-[#951a11] text-white font-medium rounded hover:bg-[#b31e14] transition duration-300">
              Volver al Inicio
            </span>
          </Link>
          <Link to="/tienda">
            <span className="px-6 py-2 border border-[#951a11] text-[#951a11] font-medium rounded hover:bg-[#951a11] hover:text-white transition duration-300">
              Tienda
            </span>
          </Link>
        </div>

        {/* Enlaces a Secciones Populares */}
        <div>
          <p className="text-lg text-gray-700 mb-4">O explora nuestras categorías populares:</p>
          <div className="flex justify-center space-x-4">
            <Link to="/categoria/novedades" className="text-[#951a11] hover:underline">
              Novedades
            </Link>
            <Link to="/categoria/ofertas" className="text-[#951a11] hover:underline">
              Ofertas
            </Link>
            <Link to="/categoria/mas-vendidos" className="text-[#951a11] hover:underline">
              Más Vendidos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
