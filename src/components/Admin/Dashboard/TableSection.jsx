import React from "react";

const TableSection = ({ title, headers, data }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">{title}</h2>
        <a href="#" className="text-sm text-blue-500 hover:underline">
          View All
        </a>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="p-2 text-left font-medium text-gray-600"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-2 text-gray-700">
                    {cellIndex === row.length - 1 ? (
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                        {cell}
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSection;
