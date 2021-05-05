import React from 'react';
import { Price } from '../Price/Price';
import './ProductPreview.scss'


export const ProductPreview = (props) => {
  const product = props?.product;
  if (!product) return null;

  return (
    <article className="product-preview">
      {/* TODO: make DRY with a ProductImage component */}
      {product.image && 
        <img
          src={product.image} 
          alt="Home Depot logo"
        />
      }
      <section className="product-preview-details">
        {product.brand && 
          <p>
            <b>
              {product.brand}
            </b>
          </p>
        }
        {product.description && 
          <p>
            {product.description}
          </p>
        }
        <Price product={product} showSpecialPrice />
      </section>
    </article>
  )
};