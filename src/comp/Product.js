import React from 'react';
import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';

const Product = (props) => {

    const {idVal} = useParams();
    const {url, path} = useRouteMatch();

    console.log('infoData  ==> ', props.infoData);
    console.log('idVal is ===> ', idVal);
    console.log('idVal type is ===> ', typeof(idVal));
    // console.log('productDATA >> ' , props.productData)

    // const productData = props.infoData.find( ({id}) => id === Number(idVal))
    const productData = props.infoData.find( (filtVar) => filtVar.id === Number(idVal))

    // const productData = props.infoData[idVal]

 
   

    console.log('productData ', productData);

    const {id, name,summary, extra, listStuff} = productData;

    return (

         
            <div className = 'product-info' >
            
            
            
            
        
            
                <div> Product ID:  {idVal} </div>
                
                
                <div> {productData.name}</div>
                <div> {productData.summary} </div>
                <div> Summary: {summary} </div>

                {listStuff.map( (listItem) => {
                    return (
                        <div key = {listItem.id}>
                            <Link 
                                to = {`${url}/${listItem.listID}`} 
                            > {listItem.listName}            
                            </Link>
                        
                        </div>
                    
                    )
                
                })}

                <Route
                    path = {`${path}/:listID`}
                >
                    <div> Something </div>
                
                </Route>
    
            </div>
    )

}

export default Product;