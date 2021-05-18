import Table from "../general/Table";
import {useParams} from "react-router-dom";
import {addOrder, removeVoucher} from "../../Rest";
import {sendForm} from "../../Common";
import {useState} from "react";

const Cart = (props) => {
    const [state, setState] = useState(null);
    const header = ["Name", "Description", "Category", "Price per one", "Quantity"];
    const rows = props.fetchedData[0].map((cartEntry) => {
        return {
            id: cartEntry.id,
            columnValues: [cartEntry.product.name, cartEntry.product.description, cartEntry.categoryName, cartEntry.product.price, cartEntry.quantity]
        }
    });
    const params = useParams();
    return (
        <div className="content">
            <Table name={`customers/${params.id}/cart`} header={header} rows={rows}/>
            <a href={`/customers/${params.id}/cart/add`}>Add product</a><br/>
            <a href={`/customers/${params.id}/orders/add`}>Place order</a><br/>
            <p>{state}</p>
        </div>
    );
};

export default Cart;