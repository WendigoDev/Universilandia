import { useCarreras } from "../../hooks/useCarreras";
import { useNavigate } from "react-router-dom";

export default function CarreraList() {
  const { carreras, /*loading, */ error } = useCarreras();
  const navigate = useNavigate();

  return (
    <section className="px-6 lg:px-20 py-16">
      {/* Título */}
      <h2 className="text-3xl font-bold mb-6">Carreras</h2>
      {/* Buscador + Filtro */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10 max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Buscar carrera..."
            className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 shadow-sm focus:outline-none"
          />
          <span className="absolute top-2 right-3 text-gray-500">
            <svg
              width="20"
              height="25"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.42 34.3899C33.22 34.3899 33.02 34.3899 32.82 34.3899C32.31 34.2499 31.94 33.9199 31.57 33.5599C28.76 30.7399 25.95 27.9199 23.14 25.1099C23.06 25.0299 22.98 24.9599 22.9 24.8799C22.76 24.9799 22.64 25.0699 22.51 25.1599C18.85 27.7099 14.85 28.4399 10.58 27.1499C3.79999 25.0899 -0.159987 18.4499 1.13001 11.4699C2.11001 6.1799 6.35999 1.8199 11.61 0.729902C12.29 0.589902 12.98 0.509902 13.66 0.399902C14.26 0.399902 14.85 0.399902 15.45 0.399902C15.53 0.419902 15.62 0.439903 15.7 0.459903C16.45 0.589903 17.21 0.659903 17.95 0.849903C26.44 3.0299 30.7 12.6599 26.6 20.4199C26.23 21.1299 25.77 21.7999 25.31 22.5499C25.38 22.5999 25.5 22.6699 25.59 22.7699C28.35 25.5299 31.1 28.2899 33.86 31.0499C34.24 31.4299 34.62 31.8199 34.8 32.3399C34.8 32.5599 34.8 32.7799 34.8 32.9999C34.61 33.7099 34.14 34.1799 33.42 34.3899ZM4.26002 14.0599C4.25002 19.7099 8.87 24.3399 14.52 24.3499C20.17 24.3599 24.79 19.7399 24.79 14.0699C24.8 8.4099 20.19 3.7799 14.53 3.7799C8.89001 3.7899 4.27002 8.3999 4.26002 14.0599Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <button className="bg-[#D9D9D9] px-6 py-2 rounded-full font-semibold shadow text-sm">
          Filtros
        </button>
      </div>
      {/* Tarjetas */}
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {carreras.map((carrera: any) => (
            <div
              key={carrera.idCarrUni}
              onClick={() => navigate(`/carrera/${carrera.idCarrUni}`)}
              className="cursor-pointer bg-gray-200 rounded-xl overflow-hidden shadow-md h-80 flex flex-col"
            >
              <div className="bg-gray-300 h-32 w-full rounded-t-xl flex justify-center items-center">
                <h1 className="text-3xl font-bold">{carrera.nombreCarrera}</h1>
              </div>
              <div className="p-4">
                <div className="h-4 bg-gray-400 rounded w-3/4 mb-2 p-4 flex items-center">
                  Arancel: ${carrera.arancel.toLocaleString("es-CL")}
                </div>
                <div className="h-3 bg-gray-400 rounded w-1/2 p-4 flex items-center">
                  Semestres: {carrera.semestres}
                </div>
                <p className="mt-5">{carrera.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
