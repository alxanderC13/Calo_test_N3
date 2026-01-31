import React from 'react';

const EstadisticasPage: React.FC = () => {
  return (
    <div className="p-8 font-sans bg-white min-h-screen">
      {/* Título Principal */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Estadísticas (página actual)
      </h1>

      <div className="flex flex-col gap-4 w-72">
        
        {/* Botón: Contar por género */}
        <button className="bg-[#007bff] hover:bg-blue-600 text-white py-2 px-4 rounded text-left transition-colors">
          Contar por género
        </button>

        {/* Dropdown / Select */}
        <select className="border border-gray-300 rounded p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        {/* Botón: Porcentaje por estado */}
        <button className="bg-[#17a2b8] hover:bg-cyan-600 text-white py-2 px-4 rounded text-left transition-colors">
          Porcentaje por estado
        </button>

        {/* Botón: Promedio de edad */}
        <button className="bg-[#28a745] hover:bg-green-600 text-white py-2 px-4 rounded text-left transition-colors">
          Promedio de edad
        </button>

      </div>
    </div>
  );
};

export default EstadisticasPage;