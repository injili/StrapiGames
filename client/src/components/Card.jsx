import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({item}) => {
    return (
        <div className="group block overflow-hidden">
            {/* <Link to={`/product/${item.id}`} >{item.isNew && <span class="whitespace-nowrap rounded-lg bg-rose-100 px-2.5 py-0.5 text-sm text-rose-700">New</span>}<img */}
            <Link to={`/product/${item.id}`}><img
                src={'http://localhost:1337' + item.attributes.img.data.attributes.url}
                alt=""
                className="h-72 rounded-lg w-full object-cover transition duration-500 group-hover:scale-105"
            /></Link>

            <div className="relative pt-4">
                <h3
                    className="group-hover:text-amber-500"
                >
                    <strong>
                        {item?.attributes.title}
                    </strong>
                </h3>
                <p className="pt-2">
                    <span className="tracking-wider"> Ksh. {item?.attributes.price}.00</span>
                </p>
            </div>
        </div>
  )
}
