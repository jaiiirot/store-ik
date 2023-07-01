import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import videoUno from "../../asset/video/videoUno.mp4";
import videoDos from "../../asset/video/videoDos.mp4";
import ItemCarrucel from "./ItemCarrucel";
export default function CarrucelContainer() {
  return (
    <Carousel
      className="my-carrucel min-md:h-96"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4"
        >
          <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4"
        >
          <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
    >
      <ItemCarrucel video={videoUno} />
      <ItemCarrucel video={videoDos} />

    </Carousel>
  );
}
