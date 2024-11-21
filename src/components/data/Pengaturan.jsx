import React from 'react';

const Pengaturan = () => {
  return (
    <div className="p-4 py-10 lg:ml-64 flex-1 min-h-screen bg-gray-50">
      <div className="flex items-center gap-3 mb-2">
        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
        <h1 className="text-xl font-bold">Pengaturan</h1>
      </div>
      <p className="text-gray-600 mb-6 text-start">Ini adalah halaman yang berisi pengaturan website.</p>

      {/* Akun dan Keamanan */}
      <div className="bg-white rounded-lg p-4 md:p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Akun dan Keamanan</h2>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="username" className="text-gray-600">Username</label>
            <input 
              type="text"
              id="username"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="Refiani Julianti"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="phone" className="text-gray-600">No. Handphone</label>
            <input 
              type="tel"
              id="phone"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="0812-1985-3387"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="email" className="text-gray-600">Email</label>
            <input 
              type="email"
              id="email"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="refianijulianti@gmail.com"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label htmlFor="password" className="text-gray-600">Password</label>
            <input 
              type="password"
              id="password"
              className="bg-gray-100 px-4 py-2 rounded w-full md:w-2/3 lg:w-[600px] text-start md:text-end"
              defaultValue="************"
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-teal-600 text-white px-6 py-2 rounded w-full md:w-auto">Edit</button>
          </div>
        </div>
      </div>

      {/* Pengaturan Notifikasi */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Pengaturan Notifikasi</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Notifikasi di Website</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Bunyi Notifikasi</span>
            <select className="bg-gray-100 px-4 py-2 rounded">
              <option>(Default)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pengaturan Bahasa */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Pengaturan Bahasa</h2>
        <div className="space-y-2">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded">
            <span className="flex-1">Bahasa Indonesia</span>
            <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded">
            <span className="flex-1">English</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengaturan;
