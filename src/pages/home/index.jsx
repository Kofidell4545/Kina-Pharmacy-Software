import React from 'react'

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Pharmacy</h1>
      <p className="text-lg text-gray-700 mb-4">Your health is our priority. We provide a wide range of healthcare products and services.</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded">Shop Now</button>
    </main>
  )
}

export default Home