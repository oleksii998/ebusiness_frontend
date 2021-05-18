import {useParams} from "react-router-dom";
import {removeCartEntry, removeProduct} from "../../Rest";
import {sendForm} from "../../Common";
import {useState} from "react";

const Product = (props) => {
    const [state, setState] = useState(null);

    const onRemoveProductHandler = () => {
        const restFunc = () => removeProduct(props.fetchedData[0].product.id);
        const respCallback = () => {
            window.location.href = `/products`;
        };
        const errCallback = (err) => setState(err.response?.data);
        sendForm(restFunc, respCallback, errCallback);
    };

    return (
        <div>
            <h2>Product</h2>
            <p><b>Name: </b> {props.fetchedData[0].product.name}</p>
            <p><b>Description: </b> {props.fetchedData[0].product.description}</p>
            <p><b>Category: </b> {props.fetchedData[0].category.name}</p>
            <p><b>Price: </b> {props.fetchedData[0].product.price}</p>
            <a href={`/products/${props.fetchedData[0].product.id}/modify`}>Modify</a><br/>
            <input type="button" onClick={onRemoveProductHandler} value="Remove"/>
            <p>{state}</p>
        </div>
    );
};

export default Product;