import "./productList.css"
import Product from "../product/Product";
import {products} from "../../data"

const ProductList = () => {
    return(
        <div className="pl">
        <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. Its Lama </h1>
        <p className="pl-desc">
        Node.js provides the facility to get process information
        such as process id, architecture, platform, version, 
        release, uptime, upu usage etc. It can also be used to kill process,
        set uid, set groups, unmask etc.
        </p>
        </div>
        <div className="pl-list">
        {products.map((item) => (
            <Product  key={item .id}  img={item.img} link={item.link}/>
        ))}        
        
        

        </div>
        </div>

    );
}
export default ProductList;