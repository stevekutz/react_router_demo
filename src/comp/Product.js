import React from 'react';
import {useParams} from 'react-router-dom';

const Product = () => {

    const {idVal} = useParams();

    return (
        <div style = {{color: 'blue'}}> Product: {idVal}</div>
    
    )

}

export default Product;