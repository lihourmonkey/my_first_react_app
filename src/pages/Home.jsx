import Card from "../components/Card"

const Home = () => {
  return (
    <div className='font-rubik'>
      {/* Hero Section */}
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

      {/* Best Seller section */}
      <div className='my-20 w-[90%] lg:w-[80%] mx-auto'>
        <h2 className='text-2xl lg:text-3xl font-bold text-center'>Best Seller</h2>
        <p className='text-center'>Explore our best seller products</p>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>

          <Card
            image={"https://mahileather.com/cdn/shop/products/tan-leather-messenger-satchel-with-15-laptop-capacity-5_800x.jpg?v=1601298610"}
            name={"Teacher , Leacturer bag"}
            price={109}
          />
          <Card
            image={"https://sg.thewalletshop.com/cdn/shop/files/Jansport-Big-Student-Navy-1.jpg?v=1740979598"}
            name={"Student bag"}
            price={79}
          />
          <Card
            image={"https://tetongear.com/cdn/shop/files/2103sceg-teton-sports-scout-45l-backpack-evergreen-38936894374126_083e3c04-3414-4ab8-a06d-43d97877abd7.jpg?v=1740933735&width=533"}
            name={"Camping bag"}
            price={129}
          />
          <Card
            image={"https://www.sojoee.com/wp-content/uploads/2025/11/O1CN014VWehV20n38ZWKRmB_2207822376893-0-cib-450x450.jpg"}
            name={"Women bag"}
            price={99}
          />
          <Card
            image={"https://mahileather.com/cdn/shop/products/tan-leather-messenger-satchel-with-15-laptop-capacity-5_800x.jpg?v=1601298610"}
            name={"Teacher , Leacturer bag"}
            price={109}
          />
          <Card
            image={"https://sg.thewalletshop.com/cdn/shop/files/Jansport-Big-Student-Navy-1.jpg?v=1740979598"}
            name={"Student bag"}
            price={79}
          />
          <Card
            image={"https://tetongear.com/cdn/shop/files/2103sceg-teton-sports-scout-45l-backpack-evergreen-38936894374126_083e3c04-3414-4ab8-a06d-43d97877abd7.jpg?v=1740933735&width=533"}
            name={"Camping bag"}
            price={129}
          />
          <Card
            image={"https://www.sojoee.com/wp-content/uploads/2025/11/O1CN014VWehV20n38ZWKRmB_2207822376893-0-cib-450x450.jpg"}
            name={"Women bag"}
            price={99}
          />

        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-transparent border border-primary px-5 py-2 rounded-lg hover:bg-primary active:scale-105 hover:text-white cursor-pointer transition-all">Explore more</button>
        </div>

      </div>

    </div>
  )
}

export default Home