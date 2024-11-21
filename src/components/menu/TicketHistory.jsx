import React from "react";
import { useNavigate } from "react-router-dom";

const TicketHistory = () => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
      // Ganti "/detail" dengan route tujuan Anda
      navigate(`/kelola-tiket`);
    };
  const tickets = [
    {
      id: 1,
      jenis: "Tiket Masuk Anak",
      harga: "Rp.5.000",
      stok: 250,
      detail: "Usia 1-5 Tahun",
    },
    {
      id: 2,
      jenis: "Tiket Masuk Dewasa",
      harga: "Rp.10.000",
      stok: 250,
      detail: "Usia 6 Tahun Keatas",
    },
    {
      id: 3,
      jenis: "Sewa Tenda Biasa",
      harga: "Rp.135.000",
      stok: 150,
      detail: "Kapasitas 3-4 Orang",
    },
    {
      id: 4,
      jenis: "Camping Biasa",
      harga: "Rp.200.000",
      stok: 100,
      detail: "Kapasitas 3-4 Orang, Matras, Sleeping Bag",
    },
  ];

  return (
    <div className="p-4 py-10 lg:ml-64 flex-1 min-h-screen bg-gray-50">
      <div className="mb-6">
      <div className="flex items-center gap-4 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                  </svg>
          <h2 className="text-xl font-semibold">Konfirmasi Tiket</h2>
        </div>
        <p className="text-sm md:text-base text-gray-600 mb-6 text-start">
          untuk melihat data serta menambah detail tiket pengunjung Agrowisata Tepas Papandayan
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex items-center gap-2 text-gray-600 md:w-auto w-full justify-center md:justify-start">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Filter
            </button>
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Pencarian"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-4 py-3 text-center text-sm font-semibold">JENIS TIKET</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">HARGA</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">STOK</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">DETAIL</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">AKSI</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b">
                  <td className="px-4 py-4 text-sm">{ticket.jenis}</td>
                  <td className="px-4 py-4 text-sm">{ticket.harga}</td>
                  <td className="px-4 py-4 text-sm">{ticket.stok}</td>
                  <td className="px-4 py-4 text-sm">{ticket.detail}</td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                      <button className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex flex-col md:flex-row justify-between items-end gap-4">
        <p className="text-sm text-gray-600">Showing 1 to 5 of 1.324 entries</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Previous</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">2</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">3</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Next</button>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 w-full md:w-auto"
           onClick={handleDetailClick}>
            Kelola Tiket
          </button>
        </div>
    </div>
  );
};

export default TicketHistory;