import { useParams } from "react-router-dom";
import camion from "../../asset/video/camion.gif";
import ItemProgress from "./ItemProgress";
export const ItemFinished = () => {
  const { idUsuario } = useParams();
  return (
    <>
      <main className="px-4 lg:px-20 py-5">
        <ItemProgress progress={"w-full"} />

        <div className="w-full h-96 flex items-center justify-center flex-col">
          <img src={camion} alt="" className="h-64" />
          <h2 className="text-xl">Muy pronto gozara de sus productos</h2>
          <br />
          <p>
            ID seguimiento: <span>{idUsuario}</span>
          </p>
        </div>
      </main>
    </>
  );
};
