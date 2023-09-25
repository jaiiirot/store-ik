export default function ItemProgress({
  progress,
  detalle = "text-[#151e31]",
  direccion = "text-[#151e31]",
  pago = "text-[#151e31]",
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-full bg-gray-300">
        <div className={`h-2 ${progress} rounded-full bg-[#151e31]`}></div>
      </div>

      <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
        <li className={`flex items-center justify-start sm:gap-1.5 ${detalle}`}>
          <span className="hidden sm:inline"> Detalle </span>
          <i className="fa-solid fa-address-card h-6 w-6 sm:h-5 sm:w-5"></i>
        </li>

        <li
          className={`flex items-center justify-center sm:gap-1.5 ${direccion}`}
        >
          <span className="hidden sm:inline"> Direccion </span>
          <i className="fa-solid fa-location-dot h-6 w-6 sm:h-5 sm:w-5"></i>
        </li>

        <li className={`flex items-center justify-end sm:gap-1.5 ${pago}`}>
          <span className="hidden sm:inline"> Pago </span>
          <i class="fa-solid fa-credit-card h-6 w-6 sm:h-5 sm:w-5"></i>
        </li>
      </ol>
    </div>
  );
}
