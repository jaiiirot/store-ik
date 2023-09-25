import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarMobile({ pages, open }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={` my-navbar-mobile sm:hidden ${
          open ? "left-0" : "-left-96"
        }`}
      >
        <ul className="list-menu">
          {pages.map((pag, i) => {
            const { id } = pag;
            return (
              <li key={i + 20} className="relative cursor-pointer">
                {id !== "Tienda" ? (
                  <Link to={`${id.toLowerCase()}`}>{id}</Link>
                ) : (
                  <>
                    <span
                      className="flex items-center justify-between"
                      onClick={() => {
                        setActive(!active);
                      }}
                    >
                      <p>{id}</p>
                      <i className="fa-solid fa-arrow-right text-sm"></i>
                    </span>
                    <ul
                      className={`relative list-menu-sub overflow-hidden ${
                        active ? "h-max" : "h-0"
                      }`}
                    >
                      {pag.items.map((name, ite) => {
                        return (
                          <li key={ite + 10} className="w-32">
                            {name}
                            <hr />
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

// https://www.flaticon.com/free-icon/rose_9120848
