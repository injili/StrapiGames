import React from 'react';
import { Card } from './Card';
import bed1 from '../assets/img/bed1.jpg';
import coffee1 from '../assets/img/coffee1.jpg';
import dining1 from '../assets/img/dining1.jpg';
import sofa1 from '../assets/img/sofa1.jpg';
import bed2 from '../assets/img/bed2.jpg';
import coffee2 from '../assets/img/coffee2.jpg';
import dining2 from '../assets/img/dining2.jpg';
import sofa2 from '../assets/img/sofa2.jpg';

export const List = () => {
    const data = [
        {
            id: 1,
            img: bed1,
            img2: bed2,
            title: 'The Bed 1',
            isNew: true,
            oldPrice: 59000,
            price: 42000,
        },
        {
            id: 2,
            img: coffee1,
            img2: coffee2,
            title: 'The Coffee 1',
            isNew: true,
            oldPrice: 9000,
            price: 7900,
        },
        {
            id: 3,
            img: dining1,
            img2: dining2,
            title: 'The Dining 1',
            isNew: true,
            oldPrice: 75000,
            price: 67000,
        },
        {
            id: 4,
            img: sofa1,
            img2: sofa2,
            title: 'The Sofa 1',
            isNew: true,
            oldPrice: 60000,
            price: 54000,
        },
    ];
    return (
        <div>
            {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
        </div>
    )
}
