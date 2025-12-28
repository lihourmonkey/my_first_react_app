import { Link, useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";
import { useState } from "react";

const ProductDetails = () => {

    const route = useParams()
    const [count, setCount] = useState(1)
    const {data,isLoading} = useGetOneProduct(route.id)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count => Math.max(1, count - 1))
    }
    

    return (
        <>
            {/* navlink */}
            <div className="bg-gray-100 w-full font-rubik py-1">
                <div className="max-w-[90%] lg:max-w-4xl mx-auto flex items-center gap-2 text-xs lg:text-sm">
                    <Link to={"/"}>Home</Link>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </span>
                    <Link to={"/product"}>Product</Link>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </span>
                    <Link className="line-clamp-1 font-semibold">
                        {data.title}
                    </Link>
                </div>
            </div>

            <div className="my-10 max-w-[90%] lg:max-w-4xl mx-auto font-rubik">
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
                        <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-4">
                            <div className="border border-gray-300 w-80 h-96 p-8">
                                <img
                                    className="w-full h-full object-contain"
                                    src={data.image}
                                    alt=""
                                />
                            </div>

                            <div>
                                {/* Show product info */}
                                <div>
                                    <h2 className="text-lg uppercase text-gray-500">{data.category}</h2>
                                    <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
                                    <h1 className="text-2xl font-bold text-red-500">$ {(data.price * count).toFixed(2)}</h1>
                                </div>
                                <div className="flex justify-between gap-2 flex-col items-start lg:items-center lg:flex-row my-6">
                                    <div className="flex justify-evenly border border-gray-200 rounded-lg overflow-hidden">
                                        <button
                                            onClick={handleDecrement}
                                            className="px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all ease-in-out">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 12h14"
                                                />
                                            </svg>
                                        </button>
                                        <p className="px-4 py-1 font-semibold">{count}</p>
                                        <button
                                            onClick={handleIncrement}
                                            className="px-4 py-1 cursor-pointer hover:bg-gray-300 transition-all ease-in-out">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="space-x-2">
                                        <button className="bg-primary px-6 py-1 text-white rounded-lg cursor-pointer">
                                            Add to cart
                                        </button>
                                        <button className="bg-yellow-500 hover:bg-yellow-400 px-6 py-1 text-white rounded-lg cursor-pointer transition-all ease-in-out">
                                            Pay now
                                        </button>
                                    </div>
                                </div>

                                <hr />

                                <p className="mt-4 text-gray-500">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default ProductDetails;
