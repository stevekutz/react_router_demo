import React from 'react';
import Feature from './Feature';

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

         
            <div className = 'product-info' >
            
            
            
            
        
            
                <div> Product ID:  {idVal} </div>
                
                
                <div> id: {id}</div>
                <div> {productName} </div>
                <div> Summary: {summary} </div>

                {features.map( (feature) => {
                    return (
                        <div 
                            key = {feature.featureID}
                        >
                            <Link 
                                to = {`${url}/${feature.featureID}`} 
                            > {feature.featureID}            
                            </Link>
                        
                        </div>
                    
                    )
                
                })}

                <Route
                    path = {`${path}/:featID`}
                >
                    <div> <Feature productData = {productData}/> </div>
                
                </Route>
                

            </div>
    )

}

export default Product;