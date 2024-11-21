import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Data statis untuk login
  const staticCredentials = {
    email: 'admin@gmail.com',
    password: 'admin123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Cek kredensial dengan data statis
    if (email === staticCredentials.email && password === staticCredentials.password) {
      // Simpan status login di localStorage (opsional)
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect ke dashboard
      navigate('/dashboard');
    } else {
      setError('Email atau kata sandi salah!');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Background Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="https://th.bing.com/th/id/R.926142ec10e94218d44ab20f8f839208?rik=e8k348Ky3%2bdDIA&riu=http%3a%2f%2fpixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fSunset-Beaches-Backgrounds.jpg&ehk=50QURJIXrlDdCSaOUTLwBe%2flUpzQvPdOPk6HVps%2bvYc%3d&risl=1&pid=ImgRaw&r=0" // Sesuaikan path gambar
          alt="Background"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">Welcome Admin</h1>
          <p className="text-gray-600 mb-8">
            Selamat datang kembali pengelola tempat wisata pemandian air panas Papandayan Kota Garut.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2 text-start">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2 text-start">
                Kata Sandi
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
                placeholder="Password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Masuk
            </button>
          </form>

          {/* Kredensial untuk testing */}
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>For testing:</strong><br />
              Email: admin@gmail.com<br />
              Password: admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
