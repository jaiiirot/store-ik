import { Link } from "react-router-dom";

function NavbarList({ listProd, open }) {
  console.log(open);
  return (
    <section
      className={`${
        open ? "list-prod list-active" : "list-prod"
      } hidden sm:flex`}
    >
      <div className="w-4/5 h-min m-auto flex justify-center gap-16 items-center">
        <ul>
          <li className="font-family-title mb-4">PRODUCTOS</li>
          {listProd.map((prod, i) => {
            const pin = prod.split(" ").join("-");
            return (
              <li key={i} className="w-[7rem] text-sm py-1">
                <Link to={pin.toLowerCase()}>{prod}</Link>
                <hr />
              </li>
            );
          })}
        </ul>
        <ImgList
          img={
            "https://i.pinimg.com/736x/f7/53/16/f7531615d32988f160eebe497892946e.jpg"
          }
        />

        <ImgList
          img={
            "https://www.clara.es/medio/2022/02/25/pilar-de-arce_06246151_750x938.jpg"
          }
        />
      </div>
    </section>
  );
}

export default NavbarList;

function ImgList({ img }) {
  return (
    <figure>
      <img src={img} alt="" style={{ height: "200px" }} />
    </figure>
  );
}
