import { Carousel } from "@material-tailwind/react";
import video from "../../asset/video/video.mp4";
import ItemCarrucel from "./ItemCarrucel";
export default function CarrucelContainer() {
  return (
    <Carousel className="overflow-hidden my-carrucel" loop autoplay autoplayDelay={5000} >
      <ItemCarrucel
        video={
          "https://player.vimeo.com/external/380081945.sd.mp4?s=338e55e1c3fea0b8211f85d3f0b685335a23168b&profile_id=164&oauth2_token_id=57447761"
        }
      />
      <ItemCarrucel video={video} />
      <ItemCarrucel
        video={
          "https://player.vimeo.com/external/433949995.sd.mp4?s=fbf83af6087dad51b78c5677e983816ab0863c1e&profile_id=164&oauth2_token_id=57447761"
        }
      />
    </Carousel>
  );
}
