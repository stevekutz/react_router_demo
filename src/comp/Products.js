import React, {useState} from 'react';
import Product from './Product';
import './product.css';

import {Link, Route, useRouteMatch} from 'react-router-dom';

import {infoData} from '../data/infodata';

const Products = () => {
    
    // console.log(infoData);     
    
    const [selectedProductID, setSelectedProductID] = useState(null)

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
                                onClick = { () => setSelectedProductID(product.id)}
                                >  {product.name} </Link>
                        </div>
                    )
                
                }) }
            
            
            </div>




            <Route 
                // exact path = {`/products/:idVal`} 
                exact path = {`${path}/:idVal`}
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
