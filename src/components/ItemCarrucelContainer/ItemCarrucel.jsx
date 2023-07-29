import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
function ItemCarrucel({ video }) {
  return (
    <div className="relative h-96 w-full">
      <img src={video} className="h-96 w-full object-cover" />
      <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 lg:pl-32">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-xl md:text-4xl lg:text-5xl font-family-title"
          >
            Indumentaria Kevin
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80 text-xs md:tex-base lg:text-lg font-family-text"
          >
            “La simplicidad, llevada al extremo, se convierte en elegancia.” Jon
            Franklin
          </Typography>
          <div className="flex gap-2 flex-wrap">
            <Link to={`todos`}>
              <Button
                size="md"
                color="white"
                className="font-family-text rounded-none"
              >
                Productos
              </Button>
            </Link>

            <Link to={"card/"}>
              <Button
                size="md"
                color="white"
                variant="text"
                className="font-family-text"
              >
                Carrito
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCarrucel;
