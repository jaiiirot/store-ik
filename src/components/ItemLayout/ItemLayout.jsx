import { Outlet } from "react-router-dom";
import Navbars from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
/* import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline"; */

export default function ItemLayout() {
  return (
    <div className="relative">
      <Navbars />
      <Outlet />
      <Footer />
      <div className="fixed bottom-5 right-5 z-50">
        {/*         <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-light-blue-900">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="relative">
              <a href="https://www.instagram.com/indu_kevin/" target="_blank">
                <img src="https://img.icons8.com/fluency/32/instagram-new.png" />
              </a>
            </SpeedDialAction>
            <SpeedDialAction className="relative">
              <a href="https://www.facebook.com/profile.php?id=100093030512515" target="_blank">
                <img src="https://img.icons8.com/color/32/facebook.png" />
              </a>
            </SpeedDialAction>
            <SpeedDialAction className="relative">
              <a href="https://api.whatsapp.com/send/?phone=5491141430021&text=Esta+me+podria+mandar+el+catalogo" target="_blank">
                <img src="https://img.icons8.com/ios-filled/32/02C345/whatsapp--v1.png" />
              </a>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial> */}
      </div>
    </div>
  );
}
