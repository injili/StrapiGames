import React from 'react';
import { Checkbox, Label, Radio } from 'flowbite-react';
import { useParams } from 'react-router-dom';
import { List } from '../components/List';
import { useState } from 'react';


export const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice,setMaxPrice] = useState(120000);
  const [sort, setSort] = useState(null);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                    <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl block">Product Collection</h2>

                    <p className="mt-4 max-w-md text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                        dicta incidunt est ipsam, officia dolor fugit natus?
                    </p>
                    </header>

                    <div className="mt-8 block lg:hidden">
                        <button
                            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                        >
                            <span className="text-sm font-medium"> Filters & Sorting </span>

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4 rtl:rotate-180"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                        <div className="hidden space-y-4 lg:block">
                          
                            <div>
                              <h2 className='py-4 font-raleway font-extralight text-2xl'>Category</h2>
                              <div className="flex items-center gap-2 py-1">
                                <Checkbox id="promotion" value={1}/>
                                <Label htmlFor="promotion">Sofas</Label>
                              </div>
                              <div className="flex items-center gap-2  py-1">
                                <Checkbox id="promotion" value={2}/>
                                <Label htmlFor="promotion">Dining Sets</Label>
                              </div>
                              <div className="flex items-center gap-2  py-1">
                                <Checkbox id="promotion" value={3}/>
                                <Label htmlFor="promotion">Tables</Label>
                              </div>
                              <div className="flex items-center gap-2  py-1">
                                <Checkbox id="promotion" value={4}/>
                                <Label htmlFor="promotion">Beds</Label>
                              </div>
                            </div>

                            <div>
                            <h2 className='py-4 border-t font-raleway font-extralight text-2xl'>Filters</h2>

                            <div className="mt-1 space-y-2">

                                <details
                                className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                <summary
                                    className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                >
                                    <span className="text-sm font-medium"> Price </span>

                                    <span className="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                    </span>
                                </summary>

                                <div className="border-t border-gray-200 bg-white">
                                    <header className="flex items-center justify-between p-4">
                                    <span className="text-sm text-gray-700"> Select the desired price range.</span>

                                    <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                        Reset
                                    </button>
                                    </header>

                                    <div className="border-t border-gray-200 p-4">
                                    <div className="flex justify-between gap-4">
                                        <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">Ksh. </span>

                                        <input
                                            type="number"
                                            id="FilterPriceFrom"
                                            placeholder="From"
                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            min={0}
                                        />
                                        </label>

                                        <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">Ksh. </span>

                                        <input
                                            type="number"
                                            id="FilterPriceTo"
                                            placeholder="To"
                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            onChange={(e)=>setMaxPrice(e.target.value)}
                                            min={0}
                                        />
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                </details>
                                <details
                                className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                  <summary
                                    className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                  >
                                    <span className="text-sm font-medium"> Sort By </span>

                                    <span className="transition group-open:-rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                    </span>
                                  </summary>
                                  <div className="border-t border-gray-200 bg-white">
                                  <header className="flex items-center justify-between p-4">
                                    <span className="text-sm text-gray-700"> Select the desired price range.</span>

                                    </header>
                                    <fieldset className="border-t flex max-w-md flex-col gap-4 p-4">
                                      <div className="flex items-center gap-2">
                                        <Radio id="united-state" name="countries"  defaultChecked onChange={e=>setSort('asc')}/>
                                        <Label htmlFor="united-state">Price (Lowest First.)</Label>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Radio id="germany" name="countries" onChange={e=>setSort('desc')}/>
                                        <Label htmlFor="germany">Price (Highest First.)</Label>
                                      </div>
                                    </fieldset>
                                  </div>
                                </details>
                            </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

  )
}
