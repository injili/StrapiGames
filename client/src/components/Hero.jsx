import React from 'react';
import { Carousel } from 'flowbite-react';
import hero1 from '../assets/img/hero1.jpg';
import hero2 from '../assets/img/hero2.jpg';
import hero3 from '../assets/img/hero3.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Hero = () => {
    useEffect(()=>{
        Aos.init({
            duration:2000,
            once: true,
        });
    }, []);
    return (
        <div className="mb-0 mx-4 sm:mx-4 lg:mx-8 md:mx-4 xl:mx-8 2xl:mx-8 h-[36rem] sm:h-[30rem] md:h-[36rem] lg:h-[40rem] xl:h-[45rem] 2xl:h-[450rem">
          <Carousel indicators={false}>
            <div>
              <section className="relative rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${hero3})` }} data-aos='zoom-out-up'>
                <div  className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                  <div className="max-w-xl text-left">
                    <h1 className="text-5xl font-raleway font-extralight sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
                      Let's find you
                      </h1>
                      <strong className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl block text-amber-400 font-extrabold">
                        Perfect 
                      </strong>
                      <h1 className="text-5xl font-raleway font-extralight sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
                        Furniture.
                    </h1>
                    <p className="text-slate-50 mt-4 max-w-lg sm:text-xl/relaxed">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                      <Link to={'/products'} className="block w-full rounded-lg bg-amber-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-amber-400 focus:outline-none focus:ring active:bg-zinc-500 sm:w-auto">
                        Shop
                      </Link>
                      <a href="#" className="block w-full rounded-lg bg-zinc-950 px-12 py-3 text-sm font-medium text-slate-50 shadow hover:text-amber-400 focus:outline-none focus:ring active:text-amber-500 sm:w-auto">
                        Custom Order
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div>
              <section className="relative rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${hero2})` }}>
                <div  className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                  <div className="max-w-xl text-left">
                    <h1 className="text-5xl font-raleway font-extralight sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
                      Valentines Offer.
                      </h1>
                      <strong className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl block text-amber-400 font-extrabold">
                        20% 
                      </strong>
                      <h1 className="text-5xl font-raleway font-extralight sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">OFF
                    </h1>
                    <p className="text-zinc-950 mt-4 max-w-lg sm:text-xl/relaxed">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                      <Link to={'/products'} className="block w-full rounded-lg bg-amber-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-amber-400 focus:outline-none focus:ring active:bg-zinc-500 sm:w-auto">
                        Shop
                      </Link>
                      <a href="#" className="block w-full rounded-lg bg-zinc-950 px-12 py-3 text-sm font-medium text-slate-50 shadow hover:text-amber-400 focus:outline-none focus:ring active:text-amber-500 sm:w-auto">
                        Custom Order
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div>
              <section className="relative rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${hero1})` }}>
                <div  className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                  <div className="max-w-xl text-left">
                    <h1 className="text-5xl font-raleway font-extralight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">
                      Make your order
                      </h1>
                      <strong className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl block text-amber-400 font-extrabold">
                        Today!!
                      </strong>
                    <p className="text-slate-50 mt-4 max-w-lg sm:text-xl/relaxed">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                      <Link to={'/products'} className="block w-full rounded-lg bg-amber-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-amber-400 focus:outline-none focus:ring active:bg-zinc-500 sm:w-auto">
                        Shop
                      </Link>
                      <a href="#" className="block w-full rounded-lg bg-zinc-950 px-12 py-3 text-sm font-medium text-slate-50 shadow hover:text-amber-400 focus:outline-none focus:ring active:text-amber-500 sm:w-auto">
                        Custom Order
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Carousel>
        </div>
    )
    
}
