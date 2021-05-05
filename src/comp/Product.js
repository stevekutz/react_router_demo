import React from 'react';
import Feature from './Feature';
import './products.css';


import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';

const Product = (props) => {

    const {idVal} = useParams();
    const {url, path} = useRouteMatch();

    // console.log('infoData  ==> ', props.infoData);
    // console.log('idVal is ===> ', idVal);
    // console.log('idVal type is ===> ', typeof(idVal));
    // // console.log('productDATA >> ' , props.productData)

    // // const productData = props.infoData.find( ({id}) => id === Number(idVal))
    const productData = props.infoData.find( (filtVar) => filtVar.id === Number(idVal))

    // const productData = props.infoData[idVal]

    
 
   

    // console.log('productData ', productData);

    const {id, productName, summary, extra, features} = productData;

    return (

            

                <div className = 'product-container' >
                
                
                
                    <div className = 'product-header-info'> 
            
                        <div className = 'product-name'> {productName} </div>
                    
                        <div className = 'product-id-container'>
                            <div className = 'product-id'> idVal parameter:  {idVal} </div>
                            <div className = 'product-id'> id: {id}</div>
                        
                        </div>
                    </div>

                    <div className = 'product-summary'> Summary: {summary} </div>

                    <ul className = 'product-link-container'>
                        {features.map( (feature) => {
                            return (
                                <li 
                                    key = {feature.featureID}
                                >
                                    <Link
                                        className = 'product-feature-link' 
                                        to = {`${url}/${feature.featureID}`} 
                                    > {feature.featureID}            
                                    </Link>
                                
                                </li>
                            
                            )
                        
                        })}
                    </ul>

                    <Route
                        path = {`${path}/:featID`}
                    >
                        <div> 
                            <Feature 
                                productData = {productData}   
                            /> </div>
                    
                    </Route>
                    

                </div>
                
    )

}

export default Product;