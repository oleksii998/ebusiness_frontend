import {useState} from "react";
import {removeCartEntry} from "../../Rest";
import {sendForm} from "../../Common";
import {useParams} from "react-router-dom";

const CartEntry = (props) => {
    const params = useParams();
    const [state, setState] = useState(null);

    const onRemoveCartEntryHandler = () => {
        const restFunc = () => removeCartEntry(props.fetchedData[0].id);
        const respCallback = () => window.location.href = `/customers/${params.id}/cart`;
        const errCallback = (err) => setState(err.response?.data);
        sendForm(restFunc, respCallback, errCallback);
    };

    return (
        <div>
            <h2>Added to cart product</h2>
            <p><b>Name: </b> {props.fetchedData[0].product.name}</p>
            <p><b>Description: </b> {props.fetchedData[0].product.description}</p>
            <p><b>Category: </b> {props.fetchedData[0].categoryName}</p>
            <p><b>Price: </b> {props.fetchedData[0].product.price}</p>
            <p><b>Quantity: </b> {props.fetchedData[0].quantity}</p>
            <a href={`/customers/${params.id}/cart/${props.fetchedData[0].id}/modify`}>Modify</a><br/>
            <input type="button" onClick={onRemoveCartEntryHandler} value="Remove"/>
            <p>{state}</p>
        </div>
    );
};

export default CartEntry;