import React from 'react';
import { ProductPod } from '../ProductPod/ProductPod';
import './ProductGrid.scss';

export const ProductGrid = ({ products }) => {
  if (!products?.length) return null;

  return (
    <article className='product-grid'>
      {/* TODO: Render a ProductPod for each product */}
    </article>
  );
};