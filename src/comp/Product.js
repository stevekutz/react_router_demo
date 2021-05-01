import React from 'react';
import {useParams} from 'react-router-dom';

const Product = () => {

    const {idVal} = useParams();

    return (
        <div className = 'product-info' > Product: {idVal} view</div>
    
    )

}

export default Product;