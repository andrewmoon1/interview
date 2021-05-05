import React, { useEffect, useState, useMemo, useCallback } from 'react';
import './App.css';
import { Header } from './components/Header/Header'
import { ProductGrid } from './components/ProductGrid/ProductGrid';
import { ProductPreview } from './components/ProductPreview/ProductPreview';
import { Swatch } from './components/Swatch/Swatch';
import { getProducts } from './api';

function App() {
  const [data, setData] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = data?.products;
  

  useEffect(() => {
    getProducts().then((productData) => {
      setData(productData);
    })
  }, []);
  const handleSwatchClick = useCallback((index) => {
    setSelectedProduct(data?.products?.[index])
  }, [data.products]);

  const Swatches = useMemo((data) => {
    return products && products.map((item, index) => {
      return <Swatch key={index} index={index} swatch={item?.swatch} handleClick={() => {handleSwatchClick(index)}}/>
    });
  }, [products, handleSwatchClick])

  if (!data.products) return null;

  return (
    <div className="App">
      <Header text={data?.headerText} />
      <ProductGrid products={data?.products} />
      <ProductPreview product={selectedProduct || data.products[0]}>
      <section className="product-preview-swatches">
          {Swatches}
        </section>
      </ProductPreview>
    </div>
  );
}

export default App; 
