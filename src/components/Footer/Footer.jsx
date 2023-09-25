import logo from "../../asset/image/ico/icon.png";
export default function Footer() {
  return (
    <footer className="bg-[#951a11] text-white">
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center pb-6">
          <img src={logo} alt="" className="h-[50px] hidden sm:block" />
          <span className="flex gap-4">
            <h1 className="font-family-title text-5xl">IK</h1>
            <div>
              <p>Indumentaria</p>
              <p>Kevin</p>
            </div>
          </span>
        </div>
        <ul className="text-center">
          <li className="pb-4"> CONTACTANOS</li>
          <li>+54 9 11 5600-1245</li>
          <li>consultas@benkaindumentaria.com</li>
          <li>
            <a href="https://maps.app.goo.gl/q7Zci9HuxbRn9wCf7" target="_blank">
              Bacacay 3064 - Flores -Capital Federal
            </a>
          </li>
        </ul>
      </section>
      <section className="text-center">
        <h4>© 2023 - Indumentaria Kevin | Todos los derechos reservados</h4>
      </section>
    </footer>
  );
}
