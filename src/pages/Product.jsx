import Card from '../components/Card'

const Product = () => {
  return (
    <>
      <div className='my-10 w-[90%] lg:w-[80%] mx-auto'>
        <h1 className='font-semibold text-3xl text-center'>ALL PRODUCTS</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>

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

      </div>
    </>
  )
}

export default Product