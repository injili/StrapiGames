import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img/bed2.jpg';
import img2 from '../assets/img/coffee2.jpg';
import img3 from '../assets/img/dining2.jpg';

export const Product = () => {
  const [selectedImg,setSelectedImg] = useState(0);
  const [quantity,setQuantity] = useState(1);
  const images = [
    img1,
    img2,
    img3
  ];
  return (
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="px-4 py-8 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    {/* <img alt={props.name} className="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200" src={product.image} /> */}
                        <div class="lg:col-span-3 lg:row-end-1">
                            <div class="lg:flex lg:items-start">
                            <div class="lg:order-2">
                                <div class="max-w-xl overflow-hidden rounded-lg">
                                <img class="h-full w-full max-w-full object-cover" src={images[selectedImg]} alt="" />
                                </div>
                            </div>

                            <div class="mt-4 lg:mt-0 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                <div class="flex flex-row items-start lg:flex-col gap-4">
                                <button type="button" class="flex-0 aspect-square h-20 overflow-hidden rounded-lg active:border-2 active:border-gray-900">
                                    <img class="h-full w-full object-cover" src={images[0]} onClick={e=>setSelectedImg(0)} alt="" />
                                </button>
                                <button type="button" class="flex-0 aspect-square h-20 overflow-hidden rounded-lg active:border-2 active:border-gray-900">
                                    <img class="h-full w-full object-cover" src={images[1]} onClick={e=>setSelectedImg(1)} alt="" />
                                </button>
                                <button type="button" class="flex-0 aspect-square h-20 overflow-hidden rounded-lg active:border-2 active:border-gray-900">
                                    <img class="h-full w-full object-cover" src={images[2]} onClick={e=>setSelectedImg(2)} alt="" />
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <nav aria-label="Breadcrumb" className="my-8">
                            <ol className="flex items-center gap-1 text-sm text-gray-600">
                                <li>
                                <Link to={'/'} className="block transition hover:text-gray-700">
                                    <span className="sr-only"> home </span>

                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                    </svg>
                                </Link>
                                </li>

                                <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </li>

                                <li>
                                <Link to={'/shop'} className="block transition hover:text-gray-700"> shop </Link>
                                </li>

                                <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                </li>

                                <li>
                                <a href="#" className="block transition hover:text-gray-700"> {/*product.name*/} </a>
                                </li>
                            </ol>
                        </nav>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">PRODUCT DESCRIPTION</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{/*product.name*/}</h1>
                        <div className="flex mb-4">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-amber-500" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-gray-600 ml-3">4 Reviews</span>
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                            <a className="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                            </a>
                            <a className="ml-2 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                            </a>
                        </span>
                        </div>
                        <p className="leading-relaxed">{/*product.description*/}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div className="flex ml-6 items-center">
                            <div className="relative">
                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                            </div>
                        </div>
                        </div>
                        <div>
                          <label for="Quantity" class="sr-only"> Quantity </label>

                          <div class="flex items-center rounded border border-gray-200">
                            <button type="button" class="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={()=>setQuantity((prev) => (prev === 1 ? 1 : prev-1))}>
                              &minus;
                            </button>

                            <input
                              type="number"
                              id="Quantity"
                              value={quantity}
                              class="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                            />

                            <button type="button" class="size-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={()=>setQuantity((prev) => prev+1)}>
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex">
                        <span className="title-font font-medium text-2xl my-4 text-gray-900">Ksh. {/*product.new_price*/}.00</span>
                        <button className="flex my-4 ml-auto text-white bg-amber-400 border-0 py-2 px-6 focus:outline-none hover:bg-amber-500 rounded-lg">Add To Cart</button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
  )
}
