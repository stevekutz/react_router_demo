import React, {useState} from 'react';
import Product from './Product';
import './product.css';

import {Link, Route, useRouteMatch} from 'react-router-dom';

import {infoData} from '../data/infodata';

const Products = () => {

    const {url, path} = useRouteMatch();


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
                                // to = {`/products/${product.id}`}
                                to = {`${url}/${product.id}`}
                                >  {product.productName} </Link>
                        </div>
                    )
                
                }) }


            </div>



            
            <Route 
                //  path = {`/products/:idVal`} 
                // exact path = {`${path}/:idVal`}
                path = {`${path}/:idVal`}
            >
                <Product
                    // productData = {infoData.find( ({id}) => id === selectedProductID)}
                    infoData = {infoData}
                />

            </Route>




        </div>
    )
}

export default Products;
