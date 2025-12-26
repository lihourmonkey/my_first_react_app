import React from 'react'

const Home = () => {
  return (
    <div className='font-rubik'>
      <div className="bg-[url('./public/slide_02.jpg')] bg-secondary bg-no-repeat bg-cover lg:bg-contain bg-center flex items-center h-screen px-4 lg:px-40">
        <div>
          <h2 className='font-bold text-xl'>New Collection</h2>
          <h1 className='font-bold text-6xl mb-2'>Luxury Without <br /> Labels</h1>
          <p>Explore in new products and best sellers</p>
            <button className='bg-primary flex gap-2 items-center text-white py-2 px-5 mt-4 rounded-lg cursor-pointer hover:bg-gray-500 active:scale-105 transition duration-300 ease-in-out'>View Collection
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home