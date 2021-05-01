import React from 'react';
import Product from './Product';
import './product.css';

import {Link, Route} from 'react-router-dom';

import {infoData} from '../data/infodata';

const Products = () => {
    
    console.log(infoData);     


    return (
        <div className = 'product-container'>
            <p>  PRODUCTS View </p>

            <div className = 'product-link-container'>
                {infoData.map( (product) => {
                    return (
                        <div 
                            key = {product.id}
                            className = 'product-links-nav'    
                        > 
                            <Link 
                                className = 'product-link'
                                to = {`/products/${product.id}`}>  {product.name} </Link>
                        
                        </div>
                    )
                
                }) }
            
            
            </div>




            <Route exact path = {`/products/:idVal`} >
                <Product/>
            
            </Route>


            

        </div>
    )
}

export default Products;
