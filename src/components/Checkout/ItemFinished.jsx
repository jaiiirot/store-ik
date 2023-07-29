import { useParams } from "react-router-dom";
import camion from "../../asset/video/camion.gif";
import ItemProgress from "./ItemProgress";
import { useContext } from "react";
import { DataProductosContext } from "../../context/DatosProductos";
export const ItemFinished = () => {
  const { idUsuario } = useParams();
  const { finished } = useContext(DataProductosContext);
  return (
    <main className="px-4 lg:px-20 py-5">
      <ItemProgress progress={"w-full"} />
      <div className="flex justify-center items-center w-full flex-col md:flex-row">
        <div className="h-96 flex items-center justify-center flex-col">
          <img src={camion} alt="" className="w-64" />
        </div>
        {Object.entries(finished).length === 7 ? (
          <div className="w-full h-96 flex items-center justify-center flex-col">
            <h2 className="text-xl lg:text-2xl">
              Muy pronto gozara de sus productos
            </h2>
            <br />
            <p>ID seguimiento:</p>
            <span>{idUsuario}</span>

            <ul className=" border-4 border-sky-500">
              <li>
                <p>email: {finished.email}</p>
              </li>
              <li>
                <p>locacion: {finished["billing-address"]}</p>
              </li>
              <li>
                <p>ZIP: {finished["billing-zip"]}</p>
              </li>
            </ul>
          </div>
        ) : (
          <h2 className="text-2xl">No hay Producsto en Seguimiento</h2>
        )}
      </div>
    </main>
  );
};
