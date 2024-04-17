import React, { useState } from 'react';
import axios from 'axios';
import { Card } from './Card';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


export const FeaturedProducts = ({type}) => {  
    const [data, setData] = useState([])
    console.log(import.meta.env.REACT_APP_API_TOKEN)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:1337/api/products?populate=*",
                    {
                        headers: {
                            Authorization: "bearer fac012c205098c632519be8742c7450fb7579892d2f0bea5d5e02847be5ff22a1608972cb544b660b7f2c90f4c2e56aa107035f6abea7b6998802d1c8c1b9d182904833b164f3cecc5832b7122745b1a9ea5c2f66dbc4c59514a2d0c0ed6ec7e1dab02179f291d7604dfd821877f0dbf5df75789f4344b375c1249cf12ab30f6",
                        },
                    }
                );
                console.log("API Response:", res.data);
                setData(res.data.data)
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    useEffect(()=>{
        Aos.init({
            duration: 2000,
            once: true,
        })
    }, [])
    return (
        <div className='bg-zinc-950 py-8 text-slate-50 mx-4 sm:mx-4 md:mx-4 lg:mx-8 xl:mx-8 2xl:mx-8 rounded-lg'>
            <header className="text-center mb-8">
                <h2 className="font-extralight font-raleway text-5xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl" data-aos='fade-up'>Featured Products</h2>
            </header>
            <div className="mx-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos='zoom-in-up'>
                {data.map((item)=>{
                    return <Card item={item} key={item.id}/>
                })}
            </div>
        </div>
    )

}
