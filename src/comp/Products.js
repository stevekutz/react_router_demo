import React from 'react';
import Product from './Product';


import {Link, Route} from 'react-router-dom';

import {infoData} from '../data/infodata';

const Products = () => {
    
    console.log(infoData);     


    return (
        <div>
            <p>  PRODUCTS </p>

            {infoData.map( (product) => {
                return (
                    <div key = {product.id}> 
                        <Link to = {`/products/${product.id}`}>  {product.name} </Link>
                    
                    </div>
                )
            
            }) }

            <Route exact path = {`/products/:idVal`} >
                <Product/>
            
            </Route>


            

        </div>
    )
}

export default Products;
