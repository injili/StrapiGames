import React from 'react';
import { Link } from "react-router-dom";
import bed from '../assets/img/beds.jpg';
import sofa from '../assets/img/sofas.jpg';
import dining from '../assets/img/dining.jpg';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export const Categories = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2000,
            once: true,
        });
    }, []);
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 md:px-4 lg:px-0">
                <header className="text-center">
                    <h2 className="font-extralight font-raleway text-gray-900 text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl" data-aos='fade-up'>Shop By Category</h2>
                    <p className="mx-4 mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                        dicta incidunt est ipsam, officia dolor fugit natus.
                    </p>
                </header>
  
                <ul className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <li data-aos='fade-right'>
                    <Link to={'/products/1'} className="group relative block">
                    <img
                      src={dining}
                      alt=""
                      className=" rounded-lg aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                    />
  
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <h3 className="text-xl font-medium text-white">Dining Sets</h3>
  
                      <Link to={'/products/1'}
                        className="rounded-lg mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </Link>
                </li>
  
                <li data-aos='fade-right'>
                  <Link to={'/products/2'} className="group relative block">
                    <img
                      src={bed}
                      alt=""
                      className="aspect-square rounded-lg w-full object-cover transition duration-500 group-hover:opacity-90"
                    />
  
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <h3 className="text-xl font-medium text-white">Beds</h3>
  
                      <Link to={'/products/2'}
                        className="rounded-lg mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </Link>
                </li>
  
                <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1" data-aos='fade-left'>
                  <Link to={'/products/3'} className="group relative block">
                    <img
                      src={sofa}
                      alt=""
                      className="aspect-square rounded-lg w-full object-cover transition duration-500 group-hover:opacity-90"
                    />
  
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <h3 className="text-xl font-medium text-white">Sofas</h3>
  
                      <Link to={'/products/3 '}
                        className="rounded-lg mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
        </section>
      )
}
