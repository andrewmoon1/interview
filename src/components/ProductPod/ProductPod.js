import React from 'react';

import { Price } from '../Price/Price';
import './ProductPod.scss'

export const ProductPod = ({ product }) => {
  if (!product) return null;

  return (
    <article className='product-pod'>
      {/* TODO: make DRY with a ProductImage component */}
      {product.image && 
        <img
          src={product.image} 
          alt="Home Depot logo"
        />
      }
      {product.brand && 
        <b>
          {product.brand}
        </b>
        }
      {product.description && 
        <span>
          {product.description}
        </span>
      }
      <Price product={product} />
    </article>
  );
};