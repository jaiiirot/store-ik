import { Carousel } from "@material-tailwind/react";
import ItemCarrucel from "./ItemCarrucel";
import photo1 from "../../asset/image/photo1.jpeg";
import photo2 from "../../asset/image/photo2.jpeg";
import photo3 from "../../asset/image/photo3.jpeg";

export default function CarrucelContainer() {
  return (
    <Carousel
      className="overflow-hidden my-carrucel"
      loop
      autoplay
      autoplayDelay={5000}
    >
      <ItemCarrucel video={photo1} />
      <ItemCarrucel video={photo2} />
      <ItemCarrucel video={photo3} />
    </Carousel>
  );
}
