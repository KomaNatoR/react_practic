import productItems from "../../data/productItems.json";

const ProductList = ({ title="Product list title"}) => {
    const listTitle = title ? <h4>{title}</h4> : null;
    const listItem = productItems.map(it => <li key={it.id}>{it.name}</li>);

    return (
        <div>
            {listTitle}

            <ul>
                {listItem}
            </ul>
        </div>
    );
};
ProductList.defaultProps = {
    productItems : [],
};


export default ProductList;