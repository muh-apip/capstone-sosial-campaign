import React, { useState } from "react";
import Sidebar from "../Layout/Sidebar";
import NavbarAdmin from "../Layout/NavbarAdmin";
import { Link } from "react-router-dom";

const InvoicesAdmin = () => {
  // Dummy data untuk tabel transaksi
  const transactions = [
    {
      id: 1,
      date: "2024-12-01",
      username: "john_doe",
      amount: 500000,
      status: "Paid",
    },
    {
      id: 2,
      date: "2024-12-02",
      username: "jane_smith",
      amount: 750000,
      status: "Unpaid",
    },
    {
      id: 3,
      date: "2024-12-03",
      username: "user123",
      amount: 1200000,
      status: "Paid",
    },
    {
      id: 4,
      date: "2024-12-04",
      username: "alice",
      amount: 300000,
      status: "Pending",
    },
  ];

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleRowClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="w-full lg:w-1/4 xl:w-1/5" />

      {/* Konten Utama */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NavbarAdmin />
        <div className="p-4 lg:p-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/dashboard" className="hover:text-gray-800">
              Dashboard /
            </Link>{" "}
            <span className="text-gray-800 font-semibold">Invoice</span>
          </div>

          {/* Area Konten */}
          <div className="flex gap-4 lg:gap-6">
            {/* Tabel */}
            <div className="w-full lg:w-3/4 bg-white shadow-md rounded-md overflow-hidden">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                  <tr className="text-left bg-[#CAE8CB] text-gray-800 font-medium">
                    <th className="py-4 px-6">No</th>
                    <th className="py-4 px-6">Tanggal Transaksi</th>
                    <th className="py-4 px-6">Username</th>
                    <th className="py-4 px-6">Jumlah</th>
                    <th className="py-4 px-6">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr
                      key={transaction.id}
                      className="border-b hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleRowClick(transaction)}
                    >
                      <td className="py-4 px-6">{index + 1}</td>
                      <td className="py-4 px-6">{transaction.date}</td>
                      <td className="py-4 px-6">{transaction.username}</td>
                      <td className="py-4 px-6">
                        Rp {transaction.amount.toLocaleString()}
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 text-sm rounded-lg ${
                            transaction.status === "Paid"
                              ? "bg-green-100 text-green-700"
                              : transaction.status === "Unpaid"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card Rincian Transaksi */}
            <div className="w-full lg:w-1/3 bg-white shadow-md rounded-md p-4 flex flex-col items-center justify-center">
              {selectedTransaction ? (
                <>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Rincian Transaksi
                  </h2>
                  <p className="text-gray-600 mb-2 text-center">
                    <span className="font-medium">Tanggal:</span>{" "}
                    {selectedTransaction.date}
                  </p>
                  <p className="text-gray-600 mb-2 text-center">
                    <span className="font-medium">Username:</span>{" "}
                    {selectedTransaction.username}
                  </p>
                  <p className="text-gray-600 mb-2 text-center">
                    <span className="font-medium">Jumlah:</span> Rp{" "}
                    {selectedTransaction.amount.toLocaleString()}
                  </p>
                  <p className="text-gray-600 text-center">
                    <span className="font-medium">Status:</span>{" "}
                    {selectedTransaction.status}
                  </p>
                </>
              ) : (
                <p className="text-center text-gray-500">
                  Klik pada transaksi untuk melihat detail.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesAdmin;
