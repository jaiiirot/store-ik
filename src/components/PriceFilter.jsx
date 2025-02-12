import { useState } from "react";

export default function PriceFilter() {
  const [minPrice, setMinPrice] = useState(3000);
  const [maxPrice, setMaxPrice] = useState(12000);

  return (
    <div className="p-4">
      <h5 className="text-lg font-bold mb-4">Filtrar por precio</h5>

      <div className="relative flex flex-col items-center">
        <input
          type="range"
          min="3000"
          max="12000"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full appearance-none bg-transparent cursor-pointer"
        />
        <input
          type="range"
          min="3000"
          max="12000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full appearance-none bg-transparent cursor-pointer mt-[-12px]"
        />
      </div>

      <div className="text-md mt-4">
        Precio: <span className="font-bold">${minPrice.toLocaleString()}</span>{" "}
        —<span className="font-bold"> ${maxPrice.toLocaleString()}</span>
      </div>

      <button className="px-4 py-2 mt-4 text-black font-bold rounded hover:bg-gray-300">
        FILTRAR
      </button>
    </div>
  );
}
