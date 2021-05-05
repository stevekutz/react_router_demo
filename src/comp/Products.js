import React, {useState} from 'react';
import Product from './Product';
import './products.css';

import {Link, Route, useRouteMatch} from 'react-router-dom';

import {infoData} from '../data/infodata';

const Products = () => {

    const {url, path} = useRouteMatch();


    return (
        <div className = 'products-container'>
            <p>  PRODUCTS View </p>

            <div className = 'products-link-container'>
                {infoData.map( (product) => {
                    return (
                        <div 
                            key = {product.id}
                            className = 'products-links-nav'    
                        > 
                            <Link 
                                className = 'products-link'
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
