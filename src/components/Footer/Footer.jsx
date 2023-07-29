export default function Footer() {
  return (
    <footer className="bg-[#151e31] ">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600 dark:text-teal-300">
          <span className="flex gap-4 text-white">
            <h1 className="font-family-title text-5xl">IK</h1>
            <div>
              <p>Indumentaria</p>
              <p>Kevin</p>
            </div>
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
          “La simplicidad, llevada al extremo, se convierte en elegancia.” Jon
          Franklin
        </p>
      </div>
    </footer>
  );
}
