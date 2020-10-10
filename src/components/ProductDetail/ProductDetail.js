import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    document.title = "product detail";

    useEffect(() => {
        fetch('https://nameless-springs-21718.herokuapp.com/product/' + productKey)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false);
            })
    }, [productKey])


    return (
        <div>
            <h1> Your product Details: </h1>
            {
                loading ? <p>loading...</p>
                    : <Product showAddToCart={false} product={product}></Product>
            }
        </div>
    );
};

export default ProductDetail;