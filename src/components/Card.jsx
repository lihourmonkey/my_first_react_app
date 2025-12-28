import { Link } from "react-router-dom"

const Card = (props) => {

    const {data} = props

    return (
        <Link to={`/product/${data.id}`}>
            <div className='border border-gray-400 rounded-lg cursor-pointer'>
                <figure className='p-2 h-40 md:h[200px] lg:h-65 overflow-hidden'>
                    <img className='w-full h-full object-contain hover:scale-110 transition-all' src={data.image} alt="teacher_bag" />
                </figure>

                <div className='px-4 py-2'>
                    <h3 className='line-clamp-1'>{data.title}</h3>
                    <p className='text-red-500'>$ {data.price}</p>
                </div>
            </div>

        </Link>
    )
}

export default Card