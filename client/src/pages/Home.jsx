import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Categories } from '../components/Categories';
import { Reviews } from '../components/Reviews';

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories />
      <FeaturedProducts type="featured"/>
      <Reviews />
    </div>
  )
}
