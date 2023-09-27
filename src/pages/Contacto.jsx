export default function Contacto() {
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-gray-300">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl font-family-title">
            ¡CONTACTANOS POR TODOS LOS MEDIOS!
          </h1>

          <p className="mt-4 text-gray-800">¡Si quieres mandanos una reseña!</p>
        </div>

        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <textarea
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm h-52"
                placeholder="Comentanos algo ..."
                style={{ resize: "none" }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9952961687954!2d-58.47726247452341!3d-34.629559158862875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc98b3203963f%3A0xbf6ff39732d065d9!2sBacacay%203064!5e0!3m2!1ses!2sar!4v1689477551290!5m2!1ses!2sar"
          style={{border: '0'}}
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}
