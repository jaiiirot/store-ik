import { Link } from "react-router-dom";

export default function ItemSection({title, img}) {
  return (
    <div className="h-max">
      <span className="group relative block bg-black">
        <img
          alt={title}
          src={img}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />
        <div className="relative p-4 sm:p-6 lg:p-8 h-[30rem]">
          <div className="mt-[20rem]">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-center">
              <Link to='' className="text-base text-nigth p-4 bg-white/60 hover:bg-white/70">
                Ver Catalogo
              </Link>
            </div>
          </div>
        </div>
      </span>
      <span>
        <h4 className="bg-gray-300 text-center px-4 py-4">{title}</h4>
      </span>
    </div>
  );
}
