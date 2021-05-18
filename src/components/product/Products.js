import {useParams} from "react-router-dom";
import Table from "../general/Table";

const Products = (props) => {
    const header = ["Name", "Description", "Price", "Category"];
    const rows = props.fetchedData[0].map((cartEntry) => {
        return {
            id: cartEntry.product.id,
            columnValues: [cartEntry.product.name, cartEntry.product.description, cartEntry.product.price, cartEntry.category.name]
        }
    });

    return (
        <div className="content">
            <Table name={`products`} header={header} rows={rows}/>
            <a href={`/products/add`}>Add</a><br/>
        </div>
    );
};

export default Products;