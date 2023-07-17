// import { Link } from "react-router-dom";

import ItemSection from "./ItemSection";

export default function ItemSectionContainer() {
  return (
    <section>
      <div className="w-full h-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ItemSection title="monos y vestidos" img="https://images.pexels.com/photos/16152520/pexels-photo-16152520/free-photo-of-city-sunset-fashion-red.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <ItemSection title="camperas y parkas" img="https://images.pexels.com/photos/17500664/pexels-photo-17500664/free-photo-of-photo-of-a-girl-wearing-a-brown-jacket-touching-a-wooden-railing-by-a-concrete-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <ItemSection title="buzos" img="https://images.pexels.com/photos/3556665/pexels-photo-3556665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <ItemSection title="sweaters y poleras" img="https://images.pexels.com/photos/2235072/pexels-photo-2235072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
      </div>
    </section>
  );
}
