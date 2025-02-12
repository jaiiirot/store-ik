import { useState } from "react";

export default function PaginationFilter({ totalPages = 7 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-2 rounded ${
            currentPage === page
              ? "bg-[#951a11] text-white font-bold"
              : "text-black hover:text-[#951a11]"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-black hover:text-[#951a11]"
      >
        ➝
      </button>
    </div>
  );
}
