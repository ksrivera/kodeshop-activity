import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const ProductList = () => {
    const [url, setUrl] = useState('http://localhost:8000/products')
    const { data: products, loading, error } = useFetch(url);

  return (
    <section>
        <div className='filter'>
            <button onClick={() => setUrl('http://localhost:8000/products')}>All</button>
            <button onClick={() => setUrl('http://localhost:8000/products?in_stock=true')}>In Stock</button>
            <button onClick={() => setUrl('http://localhost:8000/products?in_stock=false')}>Unavailable</button>

        </div>
        { loading && <p> Loading... </p> }
        { error && <p> { error } </p> }
        { products && products.map(product => (
          <div className='card' key={product.id}>
            <div className='id'>{ product.id }</div>
            <div className='name'>{ product.name }</div>
            <div className='info'>
              <div className='price'>${ product.price }</div>
              <div className={product.in_stock ? 'instock' : 'unavailable'}>{product.in_stock ? 'In Stock' : 'Unavailable'}</div>
            </div>
          </div>
          )
        )}
    </section>
  )
}
