import {useParams} from 'react-router-dom';

const Feature = (props) => {



    const {featID, featureDesc} = useParams();

    console.log("props ", props);

    const feature = props.productData.features.find( ({featureID}) => featureID === featID)

    console.log('feature ', feature);

    return (
        <div style = {{background: 'white'}} >
            {feature.featureDesc}
        </div>

    )


}

export default Feature;

