import {useParams} from 'react-router-dom';

import './feature.css';

const Feature = (props) => {



    const {featID, featureDesc} = useParams();

    console.log("props ", props);

    const feature = props.productData.features.find( ({featureID}) => featureID === featID)

    console.log('feature ', feature);

    return (
        <div 
            className = 'product-feature-description'
        >
            {feature.featureDesc}
        </div>

    )


}

export default Feature;

