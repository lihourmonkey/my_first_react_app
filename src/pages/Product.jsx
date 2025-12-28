import Card from '../components/Card'
import useGetAllProducts from '../hooks/useGetAllProducts'

const Product = () => {
  
  const {data, isLoading} = useGetAllProducts()

  return (
    <>
      <div className='my-10 w-[90%] lg:w-[80%] mx-auto'>
        <h1 className='font-semibold text-3xl text-center'>ALL PRODUCTS</h1>

        {
          isLoading == true && (
            <div className='flex justify-center items-center gap-4 my-10'>
              <div className='border-gray-300 border-4 animate-spin border-t-gray-600 h-10 w-10 rounded-full '></div>
              <p>Loading...</p>
            </div>
          )
        }

        {
          isLoading == false && (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>

              {data.map(item => (
                <Card key={item.id}
                  data={item}
                />
              ))}

            </div>
          )
        }

      </div>
    </>
  )
}

export default Product