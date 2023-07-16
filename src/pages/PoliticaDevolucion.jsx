import ItemTimeLineContainer from "../components/ItemTimeLine/ItemTimeLineContainer";

export default function PoliticaDevolucion() {
  return (
    <div className=" w-full py-4 lg:p-8 h-max bg-gray-300">
      <h1 className="font-family-title text-3xl text-center mb-4">
        POLITICAS DE DEVOLUCIÓN
      </h1>
      <div className="w-full md:w-3/4 md:m-auto h-max my-politica-dev">
        <span className="my-politica-dev__line"></span>
        <ul className="m-auto flex flex-col my-politica-dev__options">
          <ItemTimeLineContainer
            bgColor="bg-green-100"
            color="green-500"
            icon="bx bxs-bell"
          >
            <h5>1. MOTIVOS DE CAMBIO</h5>
            <p className="text-sm">
              El Usuario tendrá derecho, dentro de los plazos legales, a
              realizar cambios de los productos adquiridos por las siguientes
              razones: <br />
              &nbsp;&nbsp;a) Cambio de talle, <br />
              &nbsp;&nbsp;b) Cambio por otra prenda, <br />
              &nbsp;&nbsp;c) Prenda defectuosa, <br />
              &nbsp;&nbsp;d) recepción de prenda equivocada (EJ: modelo, color o
              talle)
            </p>
          </ItemTimeLineContainer>
          <ItemTimeLineContainer
            bgColor="bg-red-100"
            color="red-700"
            icon="bx bxs-box"
          >
            <h5>2. CONDICIONES PARA EL CAMBIO</h5>
            <p className="text-sm">
              a. El Usuario deberá contactarse para realizar el cambio dentro
              del plazo máximo de treinta (30) días de recibido el pedido,
              enviando un correo electrónico a consultas@indkevin.com indicando
              en el mail:
              <br />
              -Número de orden. <br />
              -Número de whatsapp para que podamos ponernos en contacto. <br />
              -Apellido y nombre. <br />
              -Las prendas que desea cambiar y los motivos. <br />
              <br />
              b. El producto debe estar sin uso y en las mismas condiciones en
              las que fue enviado, es importante que el producto esté envuelto
              correctamente para preservar el buen estado del mismo. <br />
              <br />
              Cambio en domicilio: El costo de envío queda a cargo del
              comprador.
            </p>
          </ItemTimeLineContainer>
          <ItemTimeLineContainer
            bgColor="bg-indigo-100"
            color="indigo-700"
            icon="bx bxs-file"
          >
            <h5>3. PROCESO DE CAMBIO</h5>
            <p className="text-sm">
              Si el Usuario no cumple con las condiciones para el cambio
              indicados en el apartado precedente, IK se reserva el derecho a
              rechazar el cambio solicitado. <br />
              Si el Usuario cumple con todas las condiciones para el cambio
              indicados en el apartado precedente, se procederá al cambio en las
              siguientes condiciones: <br />
              El valor del producto a cambiar será el precio pagado por el
              Usuario originalmente por el mismo.
            </p>
          </ItemTimeLineContainer>
          <ItemTimeLineContainer
            bgColor="bg-pink-100"
            color="pink-700"
            icon="bx bxs-edit"
          >
            <h5>4. CAMBIO</h5>
            <p className="text-sm">
              Para realizar un cambio en nuestro local el cliente deberá
              enviarnos un mail (tal como indica el punto 2) con anterioridad y
              recien cuando nosotros le comuniquemos que está listo podrá venir
              a retirarlo.
            </p>
          </ItemTimeLineContainer>
        </ul>
      </div>
    </div>
  );
}
