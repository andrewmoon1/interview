import React, { useEffect, useState, useMemo, useCallback } from 'react';
import './App.css';
import { Header } from './components/Header/Header'
import { ProductPreview } from './components/ProductPreview/ProductPreview';
import { getProducts } from './api';

function App() {
  const [data, setData] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="App">
      <Header text={data?.headerText} />
      <ProductPreview product={selectedProduct || data?.products?.[0]} />
    </div>
  );
}

export default App; 
